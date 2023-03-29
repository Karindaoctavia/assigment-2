let nameShow = document.getElementById('nama').innerHTML;
    let inputnama = document.getElementById('inputnama');
    inputnama.value = nameShow;

    let roleShow = document.getElementById('role').innerHTML;
    let inputrole = document.getElementById('inputrole');
    inputrole.value = roleShow;

    let availabilityShow = document.getElementById('availability').innerHTML;
    let inputavailability = document.getElementById('inputavailability');
    inputavailability.value = availabilityShow;

    let ageShow = document.getElementById('age').innerHTML;
    let inputage = document.getElementById('inputage');
    inputage.value = ageShow;

    let locationShow = document.getElementById('lokasi').innerHTML;
    let inputlocation = document.getElementById('inputlokasi');
    inputlocation.value = locationShow;

    let experienceShow = document.getElementById('Experience').innerHTML;
    let inputexperience = document.getElementById('inputExperience');
    inputexperience.value = experienceShow;

    let emailShow = document.getElementById('email').innerHTML;
    let inputemail = document.getElementById('inputemail');
    inputemail.value = emailShow;

    function editData(){
        let updateName = document.getElementById('inputnama').value;
        let nama = document.getElementById('nama');
        nama.innerHTML = updateName;

        let updateRole = document.getElementById('inputrole').value;
        let role = document.getElementById('role');
        role.innerHTML = updateRole;

        let updateAvailability = document.getElementById('inputavailability').value;
        let availability = document.getElementById('availability');
        availability.innerHTML = updateAvailability;
        
        let updateAge = document.getElementById('inputage').value;
        let age = document.getElementById('age');
        age.innerHTML = updateAge;

        let updateLocation = document.getElementById('inputlokasi').value;
        let location = document.getElementById('location');
        location.innerHTML = updateLocation;

        let updateExperience = document.getElementById('inputExperience').value;
        let experience = document.getElementById('Experience');
        experience.innerHTML = updateExperience;

        let updateEmail = document.getElementById('inputemail').value;
        let email = document.getElementById('email');
        email.innerHTML = updateEmail;
    }