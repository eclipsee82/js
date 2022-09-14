var car1 = {
    name: 'Ford Mustang',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 5,
        hp: 400
    },
    start: function () {
        this.isTurnOn = true;
        this.speed = 10;
    }
};

car1.start();
alert(car1.isTurnOn);
alert(car1.speed);