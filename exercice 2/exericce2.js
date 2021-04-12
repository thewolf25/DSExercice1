function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user ...  ');
        callback({ id: id, gitHubUsername: 'mehdi' });
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting Repository ... ');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}


function getBrunch(repo, callback) {
    setTimeout(() => {
        console.log('Getting commits ...');
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000)
}

function postCommit(n, callback) {
    let committed = true; // code de get commited or not 
    if (committed) {
        let data = "commited";
        callback(data);
    } else {
        let data = "not commited";
        callback(data);
    }

}

getuserfinich = (id) => {
    getUser(id, getRepositoriesFinish)
}

getRepositoriesFinish = (b) => {
    getRepositories(b, getBrunchFinish)
}

getBrunchFinish = (c) => {
    getBrunch(c, postCommitFinish)
}

postCommitFinish = (d) => {
    postCommit(d, console.log)
}

getuserfinich(5)


//promise 
getUser = (a) => {
    return new Promise((resolve, reject) => {

        //code de get USER
        console.log("Get USER")
        let user = 'ssasa';
        if (user !== null)
            resolve(user.gitHubUsername)
        else
            reject('errerur importaton de User')
    })
}
getRepositories = (b) => {

    return new Promise((resolve, reject) => {
        //code de get repos and usernameS
        console.log("get Respository")
        let repos = new Array("execice1", "execice2");
        let levelNumber = 0;
        if (repos !== null && levelNumber !== null) {
            resolve([repos, levelNumber])
        } else {
            reject("erreur niveau function get Repository !!!")
        }

    })
}

getBrunch = (c) => {
    return new Promise((resolve, reject) => {

        let brunch = "master"; //code de get Brunch (brunch == ?)
        console.log("get Brunch")
        if (brunch !== null)
            resolve(brunch)
        else
            reject("erreur de brunch !!!")


    })
}

postCommit = (d) => {

    return new Promise((resolve, reject) => {
        let committed = true
        console.log("post Commit")
        if (d === "master") {
            if (committed)
                resolve("The new version is Commited")
            else
                resolve("The new version is not commited")
        } else {
            reject("on n'est pas dans la brunch master")
        }

    })
}

// execute promise
getUser(1)
    .then(getRepositories)
    .then(getBrunch)
    .then(postCommit)
    .then(console.log)
    .catch(console.log)



/// await - async 

getuser2 = async(a) => {
    try {
        let user = { 'gitHubUsername': "mehdi" } //code user

        let [repos, levelNumber] = await getRepositories(user.gitHubUsername);

        brunch = await getBrunch(repos[levelNumber]);
        verif = await postCommit(brunch)
        console.log(verif)
    } catch (e) {
        console.log(e)
    }


}

getuser2(1)