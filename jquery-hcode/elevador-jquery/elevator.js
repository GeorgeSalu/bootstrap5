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

    this.$elevator.addClass(`floor${number}`);

    this.$elevator.data('floor', number);
  }

  removeFloorClasses() {
    for(let i = 1; i <= this.floorQtd; i++) {
      this.$elevator.removeClass(`floor${i}`);
    }
  }

}