/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.camera);
    }

function takePicture(id) {

    navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
        destinationType: Camera.DestinationType.DATA_URL,
        correctOrientation: true,
        targetHeight:100,
        targetWidth:100
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById(id);
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
}


// function guardarLocal(){


//     let nombre = "desconocido";

//     localStorage.setItem("nombre",nombre)
// }

function saveNewPlayer(nombre, nick, playerNum){
    let img = document.getElementById("myImage"+playerNum);
    console.log(img.src);
    let player = {
        name:nombre,
        nickname:nick,
        imagesrc: img.src,
        tatetiData:"none",
        memotestData:"none",
        sudokuData:"none",
    }
    console.log("hice algo :)");

    localStorage.setItem("player"+playerNum, JSON.stringify( player ))
};

function loadPlayers(){
    //cargar jugador 1
    if ( localStorage.getItem( "player1" ) ) {
        let player1 = JSON.parse(localStorage.getItem( "player1" ));
        let img = document.getElementById("myImage1");

        let print1 = document.getElementById("printPlayer1");
        print1.innerHTML = "Nombre:"+player1.name+"<br>Nick:"+player1.nickname;
        img.src = player2.imagesrc;
    }else{
        console.log("no hay entradas");
    }

    //cargar jugador 2
    if ( localStorage.getItem( "player2" ) ) {
        let player2 = JSON.parse(localStorage.getItem( "player2" ));
        let img = document.getElementById("myImage2");

        let print2 = document.getElementById("printPlayer2");
        print2.innerHTML = "Nombre:"+player2.name+"<br>Nick:"+player2.nickname;
        img.src = player2.imagesrc;
    }else{
        console.log("no hay entradas");
    }
}


//image.src = "data:image/jpeg;base64," + imageData;