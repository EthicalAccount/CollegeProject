const cursor = document.querySelector(".custom__cursor__outer");

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

document.addEventListener("click", () => {
    cursor.classList.add("click");

    setTimeout(() => {
        cursor.classList.remove("click");
    }, 500);
});

$(window).ready(function () {
    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;

    $(document).mousemove(function (e) {
        $(".custom__cursor__inner").css({
            transform:
                "translate(" +
                (e.clientX - 3.25) +
                "px, " +
                (e.clientY - 3.25) +
                "px)",
        });

        mouseX = e.clientX - 10;
        mouseY = e.clientY - 10;
    });

    setInterval(function () {
        xp += (mouseX - xp) / 6;
        yp += (mouseY - yp) / 6;
        $(".custom__cursor__outer").css({
            transform:
                "translateX(" +
                (xp - 15) +
                "px) translateY(" +
                (yp - 15) +
                "px)",
        });
    }, 10);
});

// Date Time
function updateTime() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const year = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    var currentdate = new Date();
    var date =
        "" +
        days[currentdate.getDay()] +
        " " +
        currentdate.getDate() +
        ", " +
        currentdate.getFullYear();

    var currentdate = new Date();
    var hours = currentdate.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";
    var hrs = currentdate.getHours() % 12;

    var time =
        "" +
        hrs.toString().padStart(2, "0") +
        ":" +
        currentdate.getMinutes().toString().padStart(2, "0") +
        ":" +
        currentdate.getSeconds().toString().padStart(2, "0") +
        " " +
        ampm;

    var element = document.getElementById("date");
    element.textContent = date;

    var element = document.getElementById("time");
    element.textContent = time;
}

updateTime();
setInterval(updateTime, 1000);

//

// Sidebar Expand-Collapse
const expand_menu = document.getElementById("menu-btn");

expand_menu.addEventListener("click", function () {
    document.querySelector("header").classList.toggle("expand");
});

const sections = [
    {
        btn: document.getElementById("home-btn"),
        heading: ".heading#about-us",
        content: ".main-content#about-us",
    },
    {
        btn: document.getElementById("notice-board-btn"),
        heading: ".heading#notice-board",
        content: ".main-content#notice-board",
    },
    {
        btn: document.getElementById("courses-btn"),
        heading: ".heading#courses",
        content: ".main-content#courses",
    },
    {
        btn: document.getElementById("hostel-form-btn"),
        heading: ".heading#hostel-form",
        content: ".main-content#hostel-form",
    },
    {
        btn: document.getElementById("faculty-btn"),
        heading: ".heading#faculty",
        content: ".main-content#faculty",
    },
    {
        btn: document.getElementById("placement-btn"),
        heading: ".heading#placement",
        content: ".main-content#placement",
    },
    {
        btn: document.getElementById("contact-us-btn"),
        heading: ".heading#contact-us",
        content: ".main-content#contact-us",
    },
];

// sections.forEach((section) => {
//     section.btn.classList.add("color-transition");
// });

sections[0].btn.style.backgroundColor = "#eeeeee";

function handleSectionClick(section) {
    sections.forEach((s) => {
        const isActive = s === section;
        const backgroundColor = isActive ? "#eeeeee" : "";

        s.btn.style.backgroundColor = backgroundColor;
        document.querySelector(s.heading).style.display = isActive
            ? "block"
            : "none";
        document.querySelector(s.content).style.display = isActive
            ? "block"
            : "none";
    });
}

sections.forEach((section) => {
    section.btn.addEventListener("click", () => handleSectionClick(section));
});

// Update Images
// var image = document.getElementById("homepage-pic");
// var images = [
//     "https://puchd.ac.in/photos/slide2.png",
//     "https://puchd.ac.in/photos/pu9.jpg",
//     "https://puchd.ac.in/photos/slide6.png",
// ];

// var index = 0;
// var opacity = 1;
// var trigger = false;
// const time = 25000;
// var staytime = time;
// var count = 0;
// const delta = 0.025;

// const sleep = async (milliseconds) => {
//     await new Promise(resolve => {
//         return setTimeout(resolve, milliseconds)
//     })
// }

// async function updateImage() {
//     if (opacity <= 0) {
//         image.src = images[index];
//         index = (index + 1) % images.length;
//         trigger = true;
//     }

//     if (trigger == true) {
//         opacity += delta;
//     }

//     if (opacity >= 1) {
//         await sleep(1000);
//         trigger = false;
//         staytime = time;
//     }

//     if (trigger == false) {
//         opacity -= delta;
//     }

//     // console.log(trigger);

//     image.style.opacity = opacity;
// }

// setInterval(updateImage, 50);

// JSPDF
const submit = document.getElementById("form-submit");

submit.addEventListener("click", function () {
    let height = 842,
        width = 595;
    let marginX = 40,
        marginY = width - marginX;
    var rel_height = 30;
    var deltaX = 30,
        deltaY = 20;
    var deltaboxY = 8;
    var CaptialSize = 16;
    var float_above = 2;

    var FormData = {
        name: document.getElementById("name").value.toUpperCase(),
        dob: document.getElementById("dob").value,
        f_name: document.getElementById("f-name").value.toUpperCase(),
        m_name: document.getElementById("m-name").value.toUpperCase(),
        a_g_name: document.getElementById("a-g-name").value,
        b_f_name: document.getElementById("b-f-name").value,
        p_address: document.getElementById("p-address").value,
        c_address: document.getElementById("c-address").value,
        nationality: document.getElementById("nationality").value,
    };

    var doc = new jsPDF("p", "pt", "a4");

    doc.setFontSize(12);
    doc.text("Sr.No............................", marginX, rel_height);
    doc.text("Regd.No............................", width - 180, rel_height);
    doc.setFontSize(14);
    doc.text(
        "PANJAB UNIVERSITY SWAMI SARVANAND GIRI\nREGIONAL CENTRE, HOSTEL ADMISSION FORM",
        Math.floor(width / 2),
        (rel_height += 35),
        "center"
    );
    doc.setFontSize(12);
    doc.text(
        "Session 2023-2024",
        Math.floor(width / 2),
        (rel_height += 30),
        "center"
    );
    doc.text(
        "(Incomplete Form shall not be entertained)",
        Math.floor(width / 2),
        (rel_height += 15),
        "center"
    );

    let w = 134,
        h = 160;
    doc.rect(width - marginX - w, 120, w, h);

    doc.text(
        "1.     Name of Applicant (IN CAPITALS):",
        marginX,
        (rel_height += deltaY)
    );
    doc.setFontSize(CaptialSize);
    doc.rect(
        marginX + deltaX - 2,
        rel_height + deltaboxY,
        width - w - marginX * 3 - 10,
        20
    );
    doc.text(FormData["name"], marginX + deltaX, (rel_height += deltaY + 4));
    doc.setFontSize(12);
    doc.text(
        `1.a.  Date of Birth:  ${FormData["dob"]}`,
        marginX,
        (rel_height += deltaY + 10)
    );
    doc.text(
        "...............................................",
        marginX * 3 + 17,
        rel_height + float_above
    );

    doc.text(`2.     Father's Name`, marginX, (rel_height += deltaY));
    doc.setFontSize(CaptialSize);
    doc.rect(
        marginX + deltaX - 2,
        rel_height + deltaboxY,
        width - w - marginX * 3 - 10,
        20
    );
    doc.text(FormData["f_name"], marginX + deltaX, (rel_height += deltaY + 4));
    doc.setFontSize(12);

    doc.text("3.     Mother's Name", marginX, (rel_height += deltaY));
    doc.setFontSize(CaptialSize);

    doc.rect(
        marginX + deltaX - 2,
        rel_height + deltaboxY,
        width - w - marginX * 3 - 10,
        20
    );
    doc.text(FormData["m_name"], marginX + deltaX, (rel_height += deltaY + 4));
    doc.setFontSize(12);
    doc.text(
        `a.  Guardian's Name (if father not alive) & relation`,
        marginX + deltaX,
        (rel_height += deltaY)
    );
    doc.text(
        `      ${FormData["a_g_name"]}`,
        marginX + deltaX,
        (rel_height += deltaY)
    );
    doc.text(
        "...................................................................................",
        marginX + deltaX + 17,
        rel_height + float_above
    );

    doc.text(
        `b.  Father's/Guardian's occupation and income`,
        marginX + deltaX,
        (rel_height += deltaY)
    );
    doc.text(
        `      ${FormData["b_f_name"]}`,
        marginX + deltaX,
        (rel_height += deltaY)
    );
    doc.text(
        "...............................................",
        marginX + deltaX + 17,
        rel_height + float_above
    );

    doc.text(
        "4.     Permanent Address: \n\t(same as given in the admission form\n\tand submitted to the Department)",
        marginX,
        (rel_height += deltaY)
    );

    doc.text(
        "...............................................................................\n...............................................................................\n...............................................................................",
        width - marginX,
        rel_height + float_above,
        "right"
    );

    doc.text(FormData["p_address"], width - marginX, rel_height, "right");

    rel_height += deltaY * 2;

    doc.text(
        "5.     Current Residential Address: \n\t(same as given in the admission form)\n\t(self-attested copy of residential proof\n\tto be attached)",
        marginX,
        (rel_height += deltaY)
    );
    doc.text(
        "...............................................................................\n...............................................................................\n...............................................................................",
        width - marginX,
        rel_height + float_above,
        "right"
    );

    doc.text(FormData["c_address"], width - marginX, rel_height, "right");

    rel_height += deltaY * 2;

    doc.text(
        `6.     Nationality:  ${FormData["nationality"]}`,
        marginX,
        (rel_height += deltaY + 10)
    );
    doc.text(
        "...........................................",
        marginX * 3 + 7,
        rel_height + float_above
    );

    window.open(doc.output("bloburl"));
    // doc.save("Form.pdf");
    console.log("Button Pressed");
});
