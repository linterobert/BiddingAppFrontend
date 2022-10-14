import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name : "countdown"
})

export class CountDownPipe implements PipeTransform{
    transform(value:string ) {
        var now = new Date();
        var nowmiliseconds = now.getTime();
        var miliseconds = new Date(value).getTime();
        var time = miliseconds - nowmiliseconds;
        if(time <= 0){
            return "Time finished"
        }
        var days = (time - time % 86400000) / 86400000;
        time = time % 86400000;
        var hours = (time - time % 3600000) / 3600000;
        time = time % 3600000;
        var minutes = (time - time % 60000) / 60000;
        time = time % 60000;
        var seconds = (time - time % 1000) / 1000;
        
        var hoursString : string
        if(hours < 10 && hours > 0){
            hoursString = "0".concat(hours.toString())
        }
        else{
            if(hours == 0){
                hoursString = "00";
            }
            else{
                hoursString = hours.toString();
            }
        }
        var minutesString : string
        if(minutes < 10 && minutes > 0){
            minutesString = "0".concat(minutes.toString())
        }
        else{
            if(minutes == 0){
                minutesString = "00";
            }
            else{
                minutesString = minutes.toString();
            }
        }
        var secondsString : string
        if(seconds < 10 && seconds > 0){
            secondsString = "0".concat(seconds.toString())
        }
        else{
            if(seconds == 0){
                secondsString = "00";
            }
            else{
                secondsString = seconds.toString();
            }
        }
        return days.toString().concat(":").concat(hoursString).concat(":").concat(minutesString).concat(":").concat(secondsString);
    }
}