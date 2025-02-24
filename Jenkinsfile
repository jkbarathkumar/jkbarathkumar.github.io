
pipeline {
    agent any
    
    environment {
        GITHUB_TOKEN = credentials('GitHub_PAT') 
    }

    stages {
        stage('Checkout Code') {
            steps {
                
                git branch: 'main', url: 'https://github.com/jkbarathkumar/github-auto-trigger-sample-repo.git'
            }
        }
        
        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    sh 'rm -rf jkbarathkumar.github.io'
                    sh 'ls -la'
                    sh 'git clone https://github.com/jkbarathkumar/jkbarathkumar.github.io'
                    sh 'find . -maxdepth 1 -type f -exec mv {} jkbarathkumar.github.io/ \\;'

                    dir('jkbarathkumar.github.io') {
                        sh 'git config user.name "jkbarathkumar"'
                        sh 'git config user.email "jkbarathkumar@gmail.com"'
                        sh 'git add .'
                        sh 'git commit -m "Deploy updated code"'
                        sh 'git diff --cached --name-only'


                        sh 'git push https://$GITHUB_TOKEN@github.com/jkbarathkumar/jkbarathkumar.github.io.git'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
