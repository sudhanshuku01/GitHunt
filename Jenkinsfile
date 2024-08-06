pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/githunt"
                sh "sudo cp -r ${WORKSPACE}/dist/ /var/www/githunt/"
            }
        }
    }
}