<template>
    <div class="exercisesMainDiv">
        <button class="addExercises">Dodaj vjezbu</button>
        <h1>Vjezbe</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naziv Vjezbe</th>
            <th>Opis Vjezbe</th>
            <th>Kreator Vjezbe</th>
            <th colspan="2">Akcije</th>
        </tr>
        <tr>
            <td>Sklekovi</td>
            <td>Legnete na stomak, stavite zglobove na pod u visini ramena i odgurujete se od pod </td>
            <td>Broz Tito</td>
            <td>Uredi</td>
            <td>Obrisi</td>
        </tr>
        <tr>
            <td></td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        </table>
        </div>
    </div>
</template>


<script>

export default{
name: 'Exercises',
data () {
    return {
    }
}
}

</script>


<style>
body{
    margin-top: 0%;
}
.exercisesMainDiv{
    padding-top: 60px;
}
.addExercises{
    float: right;
    margin-right: 2%;
    padding: 1%;
    border-radius: 10px;
}
.exerciseCard{
    background-color: red;
    height: 100%;
    width: 100%;
    margin: 0%;
    align-items: center;
}
</style>