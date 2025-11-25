document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the toggle button and the sidebar
//     const sidebarToggle = document.getElementById('sidebarToggle');
//     const sidebar = document.getElementById('sidebar');

//     if (sidebarToggle && sidebar) {
//         // Add click event listener to the toggle button
//         sidebarToggle.addEventListener('click', function() {
//             // Toggle the 'collapsed' class on the sidebar
//             sidebar.classList.toggle('collapsed');
//         });
//     }

//     // Optional: Start sidebar collapsed on small screens
//     if (window.innerWidth < 992) {
//         sidebar.classList.add('collapsed');
//     }
// });