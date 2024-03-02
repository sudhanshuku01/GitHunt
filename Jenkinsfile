pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from your version control system
                git 'https://github.com/sudhanshuku01/GitHunt.git'
            }
        }
        
        stage('Install dependencies') {
            steps {
                // Install Node.js and npm
                sh 'curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                // Run linting
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                // Build your React application
                sh 'npm run build'
            }
        }

       stage('Deploy') {
        steps {
             // Start the application after the build
             sh 'npm preview &'
            }
        }
    }

   post {
    always {
        echo 'Post-build actions executed regardless of the build result'
    }

    success {
        echo 'Build succeeded! Notification sent to the team.'
    }

    failure {
        echo 'Build failed! Alert sent to the team.'
    }

    unstable {
        echo 'Build unstable! Needs attention.'
    }

    aborted {
        echo 'Build aborted.'
    }
}

}
