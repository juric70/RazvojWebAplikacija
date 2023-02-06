<template>
  <div class="calendarMain">
    <FullCalendar :options="calendarOptions" />
  </div>

</template>

<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from '../../axios';
import { store } from '../../store.js'
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin,timeGridPlugin ,interactionPlugin ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        weekends: false,
        initialView: 'timeGridWeek',
        navLinks: true,
        dateClick: this.handleDateClick,
        events: []
      },
     
      TrainingUsers: '',
      store,

    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    },
    returnEvents: function(){
      console.log(this.TrainingUsers.length, "kor");
      for(let i=0; i<= this.TrainingUsers.length;i++){
      let ev = {
        title: this.TrainingUsers[i].TrainingTitle,
        start:this.TrainingUsers[i].DateOfTraining+"T"+this.TrainingUsers[i].startAt+":00",
        end:this.TrainingUsers[i].DateOfTraining+"T"+this.TrainingUsers[i].EndsAt+":00",
      }
      console.log(ev, "ovo jejedan event");
      this.calendarOptions.events.push(ev);
    }

  },
},
watch:{
  'store.user'(newUser, oldUser){
    if(newUser?.id!=null){
      axios.get(`/api/alltrainingsofuser/${newUser?.id}`).then((res) => {
        this.TrainingUsers = res.data.output;
        console.log(this.TrainingUsers, "ovo je trening kor")
        this.returnEvents();
        console.log(res.data.output, "output")
      })
    }
   
  }
},
  mounted(){
    }
 
}
</script>

<style>
.calendarMain{
  display: flex;
  padding-top: 30px;
  display: block;
  width:75%;
  margin: auto;
}
.fc .fc-timegrid-slot-minor {
    border-top-style: dotted;
   background-color: lightgray;
}

.fc-theme-standard .fc-scrollgrid {
    border:0;
}
.fc .fc-daygrid-day.fc-day-today {
    background-color: #01427b;
}
tr:nth-child(odd) {
    background-color: #d9d9d9;
}
.fc-theme-standard .fc-scrollgrid {
    border: 0;
    width: 80%;
    margin: auto;
    height: 800px;
}
.fc-theme-standard .fc-scrollgrid {
    border: 0;
    width: 70%;
    margin: auto;
    height: 600px;
}
.fc-timegrid-event-harness-inset .fc-timegrid-event, .fc-timegrid-event.fc-event-mirror, .fc-timegrid-more-link {
    /* box-shadow: 0 0 0 1px var(--fc-page-bg-color); */
    background: #e6373a;
    border: #e6373a;
}
.fc .fc-toolbar-title {
    font-size: 1.75em;
    margin: 0;
    color: #e6373a;
    /* boja naslova
} */
}
.fc .fc-button-primary:hover {
    background-color: lightgray;
    border-color: lightgray;
    color: var(--fc-button-text-color);
}
.fc .fc-button-primary:disabled {
     background-color: #e6e6e6; 
     border-color: #e6e6e6; 
    color:#01427b;
}
.fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active {
    background-color: #d9d9d9;
    border-color: #d9d9d9; 
    color: #01427b;
}

.fc .fc-button-primary {
  background-color: #e6e6e6; 
     border-color: #e6e6e6; 
    color:#01427b;
}
</style>