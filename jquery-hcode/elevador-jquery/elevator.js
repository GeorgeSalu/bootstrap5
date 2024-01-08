class Elevator {

  constructor() {
    this.$elevator = $('.elevator');
  }

  openDoor() {
    if(this.isDoorsOpen) {
      return true;
    } else {
      this.$elevator.find('.door').addClass('open');
    }
  }

  closeDoor() {
    if(this.isDoorsOpen) {
      this.$elevator.find('.door').removeClass('open');
    } else {
      return true;
    }
  }

  isDoorsOpen() {
    let doors = this.$elevator.find('.door');

    return (doors.hasClass('open'))
  }

}