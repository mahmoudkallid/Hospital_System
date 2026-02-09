document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const tableBody = document.getElementById('appointmentTableBody');

    // تحميل المواعيد المخزنة عند فتح الصفحة
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    function displayAppointments() {
        tableBody.innerHTML = '';
        appointments.forEach((app, index) => {
            const row = `
                <tr>
                    <td>${app.name}</td>
                    <td>${app.date}</td>
                    <td>${app.time}</td>
                    <td>${app.doctor}</td>
                    <td><button class="delete-btn" onclick="deleteAppointment(${index})">حذف</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // إضافة موعد جديد
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newAppointment = {
            name: document.getElementById('patientName').value,
            date: document.getElementById('appointmentDate').value,
            time: document.getElementById('appointmentTime').value,
            doctor: document.getElementById('doctorName').value
        };

        appointments.push(newAppointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        
        form.reset();
        displayAppointments();
    });

    // حذف موعد
    window.deleteAppointment = (index) => {
        if(confirm('هل أنت متأكد من حذف هذا الموعد؟')) {
            appointments.splice(index, 1);
            localStorage.setItem('appointments', JSON.stringify(appointments));
            displayAppointments();
        }
    };

    displayAppointments();
});