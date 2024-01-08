class Elevator {

  constructor() {
    this.$elevator = $('.elevator');
    this.floorQtd = 3;
  }

  openDoor() {
    if(this.isDoorsOpen()) {
      return true;
    } else {
      this.$elevator.find('.door').addClass('open');
    }
  }

  closeDoor() {
    if(this.isDoorsOpen()) {
      this.$elevator.find('.door').removeClass('open');
    } else {
      return true;
    }
  }

  isDoorsOpen() {
    let doors = this.$elevator.find('.door');

    return (doors.hasClass('open'));
  }

  goToFloor(number) {
    this.removeFloorClasses();

    let currentFloor = this.$elevator.data('floor');

    let diff = number - currentFloor;

    let time = diff * 2;

    this.$elevator.addClass(`floor${number}`);

    this.$elevator.data('floor', number);

    this.$elevator.css('-webkit-transition-duration', `${time}s`);
  }

  removeFloorClasses() {

    for(let i = 1; i <= this.floorQtd; i++) {
    
      this.$elevator.removeClass(`floor${i}`);
    
    }
  
  }

}