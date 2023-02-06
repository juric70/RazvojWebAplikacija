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
    border-top-style: dotted !important;
    background-color: lightgray !important;
}

.fc-theme-standard .fc-scrollgrid {
    border:0 !important;
}
.fc .fc-daygrid-day.fc-day-today {
    background-color: #01427b !important;
}
tr:nth-child(odd) {
    background-color: #d9d9d9 !important;
}
.fc-theme-standard .fc-scrollgrid {
    border: 0 !important;
    width: 80% !important;
    margin: auto !important;
    height: 800px !important;
}
.fc-theme-standard .fc-scrollgrid {
    border: 0 !important;
    width: 70% !important;
    margin: auto !important;
    height: 600px !important;
}
.fc-timegrid-event-harness-inset .fc-timegrid-event, .fc-timegrid-event.fc-event-mirror, .fc-timegrid-more-link {
    /* box-shadow: 0 0 0 1px var(--fc-page-bg-color); */
    background: #e6373a !important;
    border: #e6373a !important;
}
.fc .fc-toolbar-title {
    font-size: 1.75em !important;
    margin: 0 !important;
    color: #e6373a !important;
    /* boja naslova
} */
}
.fc .fc-button-primary:hover {
    background-color: lightgray !important;
    border-color: lightgray !important;
    color: var(--fc-button-text-color) !important;
}
.fc .fc-button-primary:disabled {
     background-color: #e6e6e6 !important; 
     border-color: #e6e6e6 !important; 
    color:#01427b !important;
}
.fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active {
    background-color: #d9d9d9 !important;
    border-color: #d9d9d9 !important; 
    color: #01427b !important;
}

.fc .fc-button-primary {
  background-color: #e6e6e6 !important; 
     border-color: #e6e6e6 !important; 
    color:#01427b !important;
}
</style>