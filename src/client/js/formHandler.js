function handleSubmit (event) {
    
        event.preventDefault()
        const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
        // check what text was put into the form field
        let formText = document.getElementById('name').value
        Client.checkForName(formText)
    
        console.log("::: Form Submitted :::")
        fetch('http://localhost:5006/test')
        .then(res => res.text())
        .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.message
            
           //console.log(apiSource)
          // document.getElementById("agreement").innerH= "huhhahahahah";
        })
        
    
}

export {handleSubmit}