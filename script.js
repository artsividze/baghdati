"use strict";
if (!document.URL.includes("quiz")) {
  const quizz = document.querySelector(".quiz-button");
  const videoo = document.querySelector(".video-button");
  const storee = document.querySelector(".store-button");
  const quiz = document.querySelector(".quiz");
  const video = document.querySelector(".video");
  const store = document.querySelector(".store");

  const store1 = document.querySelector(".store-items-1");

  // quizz.addEventListener("click", function () {
  //   quizz.classList.add("active");
  //   videoo.classList.remove("active");
  //   storee.classList.remove("active");
  //   quiz.classList.remove("hidden");
  //   video.classList.add("hidden");
  //   store.classList.add("hidden");
  //   console.log("video changed");
  // });
  // videoo.addEventListener("click", function () {
  //   videoo.classList.add("active");
  //   quizz.classList.remove("active");
  //   storee.classList.remove("active");
  //   video.classList.remove("hidden");
  //   quiz.classList.add("hidden");
  //   store.classList.add("hidden");
  //   console.log("video changed");
  // });
  // storee.addEventListener("click", function () {
  //   storee.classList.add("active");
  //   quizz.classList.remove("active");
  //   videoo.classList.remove("active");
  //   store.classList.remove("hidden");
  //   quiz.classList.add("hidden");
  //   video.classList.add("hidden");
  //   console.log("storee changed");
  // });
  quizz.addEventListener("click", function () {
    quizz.classList.add("active");
    videoo.classList.remove("active");
    storee.classList.remove("active");

    quiz.classList.add("grid");
    store1.classList.remove("grid");
    video.classList.remove("grid");

    quiz.classList.remove("hidden");
    video.classList.add("hidden");
    store.classList.add("hidden");
    console.log("video changed");
  });
  videoo.addEventListener("click", function () {
    videoo.classList.add("active");
    quizz.classList.remove("active");
    storee.classList.remove("active");

    quiz.classList.remove("grid");
    store1.classList.remove("grid");
    video.classList.add("grid");

    video.classList.remove("hidden");
    quiz.classList.add("hidden");
    store.classList.add("hidden");
    console.log("video changed");
  });
  storee.addEventListener("click", function () {
    storee.classList.add("active");
    quizz.classList.remove("active");
    videoo.classList.remove("active");

    quiz.classList.remove("grid");
    store1.classList.add("grid");
    video.classList.remove("grid");

    store.classList.remove("hidden");
    quiz.classList.add("hidden");
    video.classList.add("hidden");
    console.log("storee changed");
  });

  document.querySelector(".nav").addEventListener("click", function (event) {
    if (event.target.classList.contains("quiz-button")) {
      // Handle quiz button click
    } else if (event.target.classList.contains("video-button")) {
      // Handle video button click
    } else if (event.target.classList.contains("store-button")) {
      // Handle store button click
    }
  });
}

if (document.URL.includes("quiz")) {
  const h1 = document.querySelector("h1");

  //   function processAjaxData(response, urlPath){
  //     document.querySelector(".quiz").innerHTML = response.html;
  //     document.title = response.pageTitle;
  //     window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);

  // }
  //////////////////////////////////////////////////change url//////////////////////////////////////////////////
  function changeURLPathAndNavigate(newPath) {
    // Change the hash fragment to the new path
    window.location.hash = "#" + newPath;
    window.addEventListener("popstate", (e) => {
      if (e.state) {
        document.querySelector(".content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
      }
    });
  }
  function quiz1() {
    h1.textContent = "რამდენად კარგად იცნობ ბაღდათურ სლენგებს?";
    let img = document.getElementById("quiz-img");
    img.src = `images/quiz-1.jpg`;

    let url = "quiz-1";
    // processAjaxData(response, urlPath);
    changeURLPathAndNavigate("quiz-1");

    const questions = [
      {
        question: "წეიმძღვანიე",
        answers: [
          { text: "ცხვირი მოიწმინდე", correct: false },
          { text: "თან წაიღე", correct: true },
          { text: "ნაგავში გადააგდე", correct: false },
          { text: "რამე მოიცვი", correct: false },
        ],
      },
      {
        question: "გამოსესვილი-გამობესკვილი",
        answers: [
          { text: "მთვრალი", correct: false },
          { text: "ნაჭამი", correct: true },
          { text: "ნაცემი", correct: false },
          { text: "კარგად ჩაცმული", correct: false },
        ],
      },
      {
        question: "ატრუებული",
        answers: [
          { text: "რაღაც გინდა და არ იცი რა", correct: true },
          { text: "ზუსტად იცი რა გინდა", correct: false },
          { text: "შენ არ გინდა მარა მშობლებს უნდა", correct: false },
          { text: "იცი რაც გინდა მარა არ გამოვა", correct: false },
        ],
      },
      {
        question: "გადუდღნე",
        answers: [
          { text: "დაღეჭვის გარეშე ჭამე", correct: false },
          { text: "ცუდად შეღებე", correct: true },
          { text: "სანამ ცხელია გადაიღე", correct: false },
          { text: "მწლაკუნით ჭამე", correct: false },
        ],
      },
      {
        question: "სირისტიანი",
        answers: [
          { text: "თბილისელი", correct: true },
          { text: "ქუთაისელი", correct: false },
          { text: "სველი კაცი", correct: false },
          { text: "ჩია კაცი", correct: false },
        ],
      },
      {
        question: "ქე ჩავა",
        answers: [
          { text: "მეგრული გვარი", correct: false },
          { text: "სამი დღის სუპი რო თავზე რაღაცას იკეთებს", correct: false },
          { text: "ხელოვნურად გამოწვეული წვიმა", correct: false },
          { text: "ჩაეტევა", correct: true },
        ],
      },
      {
        question: "ბონძღი",
        answers: [
          { text: "მთვრალი ზომბი", correct: false },
          { text: "დაბალი მსუქანი მამაკაცი", correct: true },
          { text: "დაბალი მსუქანი ქალბატონი", correct: false },
          { text: "მაღალი სუსტი მამაკაცი", correct: false },
        ],
      },
      {
        question: "დაფსხრიკული",
        answers: [
          { text: "იმერული კერძი", correct: false },
          { text: "დენდარტყმული ადამიანი", correct: false },
          { text: "უძილო ადამიანი", correct: false },
          { text: "მომცრო გარეგნობის ადამიანი", correct: true },
        ],
      },
      {
        question: "დაგჟვერავ",
        answers: [
          { text: "გცემ", correct: true },
          { text: "მასაჟს გაგიკეთებ", correct: false },
          { text: "თვალყურს გადევნებ", correct: false },
          { text: "სიკეთეს გაგიკეთებ", correct: false },
        ],
      },
      {
        question: "მიზდღემჩი",
        answers: [
          { text: "მანქანაზე ჩამოსაკიდებელი", correct: false },
          { text: "ამერიკული როკ-ბენდი", correct: false },
          { text: "ყოველთვის", correct: true },
          { text: "შორისდებული", correct: false },
        ],
      },
    ];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "შემდეგი კითხვა";
      showQuestion();
    }
    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      });
    }
    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }
    function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
          button.disabled = true;
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    }

    function showScore() {
      resetState();

      questionElement.innerHTML = `შენი ქულაა ${score}/${questions.length}.`;
      changeURLPathAndNavigate(`quiz-1-result${score}`);
      let score1 = 0;
      localStorage.setItem("score1", score);

      nextButton.innerHTML = "თავიდან დაწყება";
      nextButton.style.display = "block";
    }
    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });
    startQuiz();
    // document.addEventListener("DOMContentLoaded", function () {
    //   var facebookButton = document.querySelector(".facebook");
    //   facebookButton.addEventListener("click", function () {
    //     let score11 = localStorage.getItem("score1");
    //     var imageUrl = `https://absolute-new.netlify.app/images/quiz-1-${score11}.jpg`; // URL of the image to share
    //     console.log(imageUrl);
    //     var shareURL =
    //       "https://www.facebook.com/sharer/sharer.php?u=" +
    //       encodeURIComponent(imageUrl);
    //     window.open(shareURL, "Share on Facebook", "width=1050,height=850");
    //     console.log(shareURL);
    //   });
    // });
   
   document.addEventListener("DOMContentLoaded", function () {
  var facebookButton = document.querySelector(".facebook");
  facebookButton.addEventListener("click", function () {
    let score11 = localStorage.getItem("score1");
    var imageUrl = `https://absolute-new.netlify.app/images/quiz-1-${score11}.jpg`; // URL of the image to share
    console.log(imageUrl);
    var websiteUrl = "https://mybaghdati.info/"; // Your website URL
    var shareDescription = "Check out my quiz result!"; // Description to share along with the image
    var shareURL =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(websiteUrl) +
      "&quote=" +
      encodeURIComponent(shareDescription) +
      "&picture=" +
      encodeURIComponent(imageUrl);
    window.open(shareURL, "Share on Facebook", "width=1050,height=850");
    console.log(shareURL);
  });
});

  }

  function quiz2() {
    h1.textContent = "გადაიპარები თუ არა მექსიკის საზღვარზე?";
    changeURLPathAndNavigate("quiz-2");
    const questions = [
      {
        question: "სად არის ა.შ.შ?",
        answers: [
          { text: "ჩრდილოეთ ამერიკაში", correct: true },
          { text: "ევროპაში", correct: false },
          { text: "აზიაში", correct: false },
          { text: "სამხრეთ ამერიკაში", correct: false },
        ],
      },
      {
        question: "რომელი ქვეყნის მოქალაქე ხარ?",
        answers: [
          { text: "საქართველო", correct: true },
          { text: "უკრაინა", correct: false },
          { text: "პოლონეთი", correct: false },
          { text: "სლოვაკეთი", correct: false },
        ],
      },
      {
        question: "რას ნიშნავს მანიგგა?",
        answers: [
          { text: "შეჩემა", correct: false },
          { text: "შავი კაცი კაი კაცი", correct: false },
          { text: "მარინა", correct: false },
          { text: "ჩემი ძმა", correct: true },
        ],
      },
      {
        question: "რისი გაკეთება გინდა როცა საქართველოში დაბრუნდები?",
        answers: [
          { text: "სათუთუნეს გახსნი", correct: false },
          { text: "თონეს გახსნი", correct: false },
          { text: "იქანა თუ ჩევედი,რა ჩამომიყვანს აქანა", correct: true },
          { text: "ცოლს მოვიყვან", correct: false },
        ],
      },
      {
        question: "რა ფულის ერთეული გამოიყენება აშშ-ში?",
        answers: [
          { text: "ვერცხლის მონეტა", correct: false },
          { text: "დოლარი", correct: true },
          { text: "ევრო", correct: false },
          { text: "მანდარინი", correct: false },
        ],
      },
      {
        question: "რას გააკეთებ პირველი როცა ამერიკაში ჩახვალ?",
        answers: [
          { text: "დაჩექინდები", correct: false },
          { text: "შავკანიანთან ფოტოს გადავიღებ", correct: true },
          { text: "სახინკლეში შევალ", correct: false },
          { text: "ბუსტი ლათინა", correct: false },
        ],
      },
      {
        question: "რომელია აშშ-ს დედაქალაქი?",
        answers: [
          { text: "ნიუ-იორკი", correct: false },
          { text: "ლოს-ანჯელესი", correct: false },
          { text: "ვაშინგტონი", correct: true },
          { text: "ლონდონი", correct: false },
        ],
      },
      {
        question: "ვინ არის ამერიკის პრეზიდენტი?",
        answers: [
          { text: "ჯო ბაიდენი", correct: true },
          { text: "დონალდ ტრმპი", correct: false },
          { text: "ბარაკ ობამა", correct: false },
          { text: "მია ხალიფა", correct: false },
        ],
      },
      {
        question: "რას ჭამენ ამერიკელები მადლიერების დღეს?",
        answers: [
          { text: "კოკორი", correct: false },
          { text: "ციცარი", correct: false },
          { text: "ინდაური", correct: true },
          { text: "ნაზუქი", correct: false },
        ],
      },
      {
        question: "რას ნიშნავს აბრევიატურა აშშ?",
        answers: [
          { text: "ამერიკელი შეურაცხადი შავკანიანები", correct: false },
          { text: "აქედან შეპარული შინაურები", correct: false },
          { text: "ახალგაზრდა შიშველი შორენა", correct: false },
          { text: "ამერიკის შეერთებული შტატები", correct: true },
        ],
      },
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }
    startQuiz();
    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      });
    }
    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
          button.disabled = true;
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    }
    function showScore() {
      resetState();
      if (score <= 5) {
        questionElement.innerHTML = `შენი ქულაა ${score}/${questions.length}.მოგაბრუნებენ მექსიკის საზღვრიდან.`;
      } else {
        questionElement.innerHTML = `შენი ქულაა ${score}/${questions.length}.წარმატებით შეიპარე ამერიკაში და კარგი ბებია შეგხვდა.`;
      }
      changeURLPathAndNavigate(`quiz-2-result${score}`);
      let score2 = 0;
      localStorage.setItem("score2", score);
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";

      nextButton.addEventListener("click", function () {
        img.src = `images/quiz-2.jpg`;
      });
    }
    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });
    startQuiz();

   document.addEventListener("DOMContentLoaded", function () {
  var facebookButton = document.querySelector(".facebook");
  facebookButton.addEventListener("click", function () {
    let score11 = localStorage.getItem("score1");
    var imageUrl = `https://absolute-new.netlify.app/images/quiz-1-${score11}.jpg`; // URL of the image to share
    console.log(imageUrl);
    var websiteUrl = "https://mybaghdati.info/"; // Your website URL
    var shareDescription = "Check out my quiz result!"; // Description to share along with the image
    var shareURL =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(websiteUrl) +
      "&quote=" +
      encodeURIComponent(shareDescription) +
      "&picture=" +
      encodeURIComponent(imageUrl);
    window.open(shareURL, "Share on Facebook", "width=1050,height=850");
    console.log(shareURL);
  });
});
  }
  function quiz3() {
    h1.textContent = "რა ტიპის ბაღდათელი ხარ?";
    changeURLPathAndNavigate(`quiz-3`);
    const questions = [
      {
        question: "სად ატარებ ყველაზე მეტ დროს ბაღდათში?",
        answers: [
          { text: "რაიკომის ბაღში", score: 15 },
          { text: "კულტურის სახლთან", score: 10 },
          { text: "გუბელაძის ძეგლან", score: 5 },
          { text: "ბაბანაურში", score: 0 },
        ],
      },
      {
        question: "სადა ბანაობ?",
        answers: [
          { text: "ბაბანაურში", score: 5 },
          { text: "საკრაულაზე", score: 10 },
          { text: "სათავეზე", score: 15 },
          { text: "მსუქანი ვარ", score: 0 },
        ],
      },
      {
        question: "რომელი სკოლა დაამთავრე?",
        answers: [
          { text: "ნინოშვილის სკოლა", score: 10 },
          { text: "მაიაკოვსკის სკოლა", score: 15 },
          { text: "დიმის სკოლა", score: 0 },
          { text: "უკლებას სკოლა", score: 5 },
        ],
      },
      {
        question: "საირმეში ასვლის მიზეზი",
        answers: [
          { text: "თოვლში ფოტოების გადაღება", score: 15 },
          { text: "ირმებთან ფოტოების გადაღება", score: 5 },
          { text: "კოხოძის მანქანებთან ფოტოების გადაღება", score: 0 },
          { text: "თირკმელი მაწუხებს", score: 15 },
        ],
      },
      {
        question: "ქუთაისში წასვლის მიზეზი?",
        answers: [
          { text: "შაურმა", score: 5 },
          { text: "ბოულინგი", score: 0 },
          { text: "უნივერსიტეტი", score: 15 },
          { text: "ხაზის მძღოლი ვარ", score: 10 },
        ],
      },
      {
        question: "რომელი მაღაზიის სასმელი ჯობია?",
        answers: [
          { text: "ერმილეს", score: 5 },
          { text: "ელისოს", score: 5 },
          { text: "გოლას", score: 5 },
          { text: "ზაზაიას პლანი", score: 0 },
        ],
      },
      {
        question: "რაზე დადიხარ ბაღდათში?",
        answers: [
          { text: "ცეკვაზე", score: 10 },
          { text: "გიტარაზე", score: 10 },
          { text: "სიგარეტზე", score: 0 },
          { text: "ბირჟაზე", score: 15 },
        ],
      },
      {
        question: "როგორი ჩაცმული დადიხარ ქორწილში?",
        answers: [
          { text: "თეთრი საროჩკით და ნაჭრის შარვლით", score: 10 },
          { text: "თეთრი საროჩკით და ჯინსის შარვლით", score: 5 },
          { text: "ბოლო ზარის თეთრი საროჩკით ", score: 0 },
          { text: "შემოხეული თეთრი საროჩკით", score: 15 },
        ],
      },

      {
        question: "რისთვის ადიხარ მუზეუმში?",
        answers: [
          { text: "მზესუმზირის საჭმელად", score: 5 },
          { text: "ძმაკაცი ჩხუბობს", score: 15 },
          { text: "სადრიფტაოდ", score: 0 },
          { text: "წყლის ასაღებად", score: 15 },
        ],
      },
      {
        question: "რას აკეთებ ბაღდათობას?",
        answers: [
          { text: "ძმაკაცი ჩხუბობს", score: 15 },
          { text: "ბატუტზე ვხტუნავ", score: 5 },
          { text: "ვუყურებ როგორ ჭამენ", score: 15 },
          { text: "ბომბაჩკებს ვაფეთქებ", score: 0 },
        ],
      },
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }
    startQuiz();
    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (currentQuestionIndex < questions.length)
          button.addEventListener("click", function (e) {
            const selectedBtn = e.target;
            selectedBtn.classList.add("correct");
            score += answer.score;
            console.log(score);
            Array.from(answerButtons.children).forEach((button) => {
              button.disabled = true;
            });
            nextButton.style.display = "block";
          });
      });
    }
    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function showScore() {
      resetState();

      if (score <= 140 && score >= 110) {
        questionElement.innerHTML = `გილოცავ,შენ ხარ გამოსული ბაღდათელი!`;
      } else if (score <= 110 && score >= 80) {
        questionElement.innerHTML = `შენ ხარ საშუალო სტატისტიკური ბაღდათელი!`;
      } else if (score <= 80 && score >= 40) {
        questionElement.innerHTML = `ბაღდათლობაზე სამუშაო გაქვს,თუმცა შეუძლებელი არაფერია.`;
      } else {
        questionElement.innerHTML = `ვფიქრობთ გადაცმული ბაღდათლი ხარ.`;
      }
      changeURLPathAndNavigate(`quiz-3-result${score}`);
      let score3 = 0;
      localStorage.setItem("score3", score);
      nextButton.innerHTML = "Play Again";
      // nextButton.style.nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
    }
    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });
    startQuiz();

    document.addEventListener("DOMContentLoaded", function () {
      var facebookButton = document.querySelector(".facebook");
      facebookButton.addEventListener("click", function () {
        let score33 = localStorage.getItem("score3");
        if (score33 <= 140 && score33 >= 110) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-3-1.jpg`;
        }
        // URL of the image to share
        else if (score33 <= 110 && score33 >= 80) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-3-2.jpg`;
        } else if (score33 <= 80 && score33 >= 40) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-3-3.jpg`;
        } else {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-3-4.jpg`;
        }
        console.log(imageUrl);
        var shareURL =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(imageUrl);
        window.open(shareURL, "Share on Facebook", "width=1050,height=850");
        console.log(shareURL);
      });
    });
  }
  function quiz4() {
    h1.textContent = "რომელი ბაღდათელი სუპერგმირი ხარ?";
    changeURLPathAndNavigate(`quiz-4`);
    const questions = [
      {
        question: "რას აკეთებ ღამის პერიოდში?",
        answers: [
          { text: "ბნელ ოთახში ტელეფონს ვსქროლავ", score: 10 },
          { text: "ცხოველებს ველაპარაკები", score: 5 },
          { text: "საღაცა ვსვამ", score: 10 },
          { text: "მანქანაში ჩაწოლილი ვზივარ", score: 15 },
        ],
      },
      {
        question: "აირჩიე საყვარელი კერძი?",
        answers: [
          { text: "ხინკალი", score: 5 },
          { text: "ღამურა", score: 0 },
          { text: "ჩასაყოლებელი", score: 10 },
          { text: "შემწვარი კარტოფილი", score: 15 },
        ],
      },
      {
        question: "რა განიჭებს სიამოვნებას?",
        answers: [
          { text: "ინკოგნიტო", score: 15 },
          { text: "სადღეგრძელოების თქმა", score: 10 },
          { text: "მანქანები", score: 15 },
          { text: "ნადირობა/თევზაობა", score: 0 },
        ],
      },
      {
        question: "აირჩიე სუპერძალა?",
        answers: [
          { text: "სვამ და პახმელია არ გაქ", score: 10 },
          { text: "ბეენვე", score: 15 },
          { text: "ულიმიტო სიგარეტი", score: 5 },
          { text: "გაფრენა", score: 0 },
        ],
      },
      {
        question: "რის გამო გინდა იყო სუპერგმირი?",
        answers: [
          { text: "გამგეობაში ვიმუშავებ", score: 15 },
          { text: "შეყვარებულს გავიჩენ", score: 10 },
          { text: "სასმელი მექნება წელზე", score: 5 },
          { text: "ჩემი საქმე მექნება", score: 0 },
        ],
      },
      {
        question: "რა არის შენი სისუსტე?",
        answers: [
          { text: "რაღაც რაკუნობს", score: 15 },
          { text: "ნაბახუსევი", score: 10 },
          { text: "მსუქანი ვარ", score: 0 },
          { text: "ნისია მაქვს ყველა მაღაზიაში", score: 0 },
        ],
      },
      {
        question: "რა იქნება შენი სუპერგმირის კოსტუმი?",
        answers: [
          { text: "კოსტუმი", score: 5 },
          { text: "ჯარის ფორმა", score: 15 },
          { text: "ხალათი", score: 0 },
          { text: "თეთრი საროჩკა", score: 10 },
        ],
      },
      {
        question: "ვინ არის შენი ანტაგონისტი?",
        answers: [
          { text: "ვანელი სუპერგმირი", score: 5 },
          { text: "თეთრი კაცი", score: 0 },
          { text: "ნაციონალები", score: 10 },
          { text: "ბუგორი", score: 15 },
        ],
      },
      {
        question: "ვინ ითამაშებდა შენს როლს სუპერგმირის ფილმში?",
        answers: [
          { text: "კრისტიან ბეილი", score: 0 },
          { text: "გივი სიხარულიძე", score: 5 },
          { text: "გიორგი ჭელიძე", score: 15 },
          { text: "ენდრიუ ტეიტი", score: 10 },
        ],
      },
      {
        question: "რომელ სუპერგმირთან იძმაკაცებდი?",
        answers: [
          { text: "ადამიან ობობასთან", score: 5 },
          { text: "ნავასოღლისთან", score: 15 },
          { text: "ოპტიმუს პრაიმთან", score: 10 },
          { text: "ჰალკთან", score: 0 },
        ],
      },
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }
    startQuiz();
    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (currentQuestionIndex < questions.length)
          button.addEventListener("click", function (e) {
            const selectedBtn = e.target;
            selectedBtn.classList.add("correct");
            score += answer.score;
            console.log(score);
            Array.from(answerButtons.children).forEach((button) => {
              button.disabled = true;
            });
            nextButton.style.display = "block";
          });
      });
    }
    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function showScore() {
      resetState();
      if (score <= 150 && score >= 110) {
        questionElement.innerHTML = `ბაღდათელი ტრანსფორმერი.როგორც ჩანს შენ მანქანა უფრო ხშირად ხარ ვიდრე ადამიანი.`;
      } else if (score <= 110 && score >= 80) {
        questionElement.innerHTML = `ბაღდათელი ლოთმენი.როგორც ჩანს ბავშვობაში არყის სახდელ ქვაბში ჩავარდი.`;
      } else if (score <= 80 && score >= 40) {
        questionElement.innerHTML = `ბაღდათელი ვითმენი.როგორც ჩანს შენ იმაზე მეტს ითმენ ვიდრე საჭიროა.`;
      } else {
        questionElement.innerHTML = `ოქრო კაცი.როგორც ჩანს გულში ჩასახუტებელი ადამიანი ხარ.`;
      }
      changeURLPathAndNavigate(`quiz-4-result${score}`);
      let score4 = 0;
      localStorage.setItem("score4", score);
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
    }
    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });
    startQuiz();

    document.addEventListener("DOMContentLoaded", function () {
      var facebookButton = document.querySelector(".facebook");
      facebookButton.addEventListener("click", function () {
        let score44 = localStorage.getItem("score3");
        if (score44 <= 140 && score44 >= 110) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-4-1.jpg`;
        }
        // URL of the image to share
        else if (score44 <= 110 && score44 >= 80) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-4-2.jpg`;
        } else if (score44 <= 80 && score44 >= 40) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-4-3.jpg`;
        } else {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-4-4.jpg`;
        }
        console.log(imageUrl);
        var shareURL =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(imageUrl);
        window.open(shareURL, "Share on Facebook", "width=1050,height=850");
        console.log(shareURL);
      });
    });
  }
  function quiz5() {
    h1.textContent = "რომელ ბაღდათის სოფელში იმსახურებ ცხოვრებას?";
    changeURLPathAndNavigate(`quiz-5`);

    const questions = [
      {
        question: "რას აკეთებ დღის განმავლობაში",
        answers: [
          { text: "ძროხებს ვაბამ", score: 15 },
          { text: "ვაბირჟავებ", score: 0 },
          { text: "ბირჟაზე ვსვამ", score: 5 },
          { text: "ძროხაზე ვსვამ", score: 10 },
        ],
      },
      {
        question: "არის თუ არა მაღაზია შენს სოფელში(ფეიბოქსი)?",
        answers: [
          { text: "კი", score: 0 },
          { text: "არა", score: 15 },
          { text: "მაღაზია კი,ფეიბოქსი არა", score: 5 },
          { text: "მაღაზია არა,ფეიბოქსი კი", score: 10 },
        ],
      },
      {
        question:
          "გყავს თუ არა ძროხა სამეზობლოში რომელსაც სახელი ქვია ?(ცხოველი ძროხა)",
        answers: [
          { text: "კი", score: 15 },
          { text: "არა", score: 5 },
        ],
      },
      {
        question: "გაჩითავ რამეს?",
        answers: [
          { text: "კი", score: 15 },
          { text: "არა", score: 5 },
        ],
      },
      {
        question: "რომელ მაღაზიაში გაქვს ნისია?",
        answers: [
          { text: "ბონდოს", score: 10 },
          { text: "ელისოს", score: 15 },
          { text: "კაკოს დრაივი", score: 5 },
          { text: "ჩამოთვლილთაგან ყველაში", score: 0 },
        ],
      },
      {
        question: "როგორი ჩაცმული გადიხარ მაღაზიაში?",
        answers: [
          { text: "პარიკით(ნისიაზე რო ვერ გიცნოს)", score: 15 },
          { text: "პარიკის გარეშე (ნისიაზე კიდე რო ვერ გიცნოს)", score: 10 },
          { text: "ჩუსტებით და ხალათით", score: 5 },
          { text: "თეთრი საროჩკით", score: 0 },
        ],
      },
      {
        question: "შენ სოფლამდე მისასვლელი ტრანსპორტი?",
        answers: [
          { text: "მიკროავტობუსი", score: 0 },
          { text: "მანქანა მყავს", score: 15 },
          { text: "პაპუტნი", score: 10 },
          { text: "დრაკონი", score: 5 },
        ],
      },
      {
        question: "რომელი ინტერნეტით სარგებლობ?",
        answers: [
          { text: "მაგთი", score: 0 },
          { text: "აირმაქსი", score: 10 },
          { text: "მეზობლის", score: 15 },
          { text: "ეშმაკის მოგონილია", score: 5 },
        ],
      },
      {
        question: "რამდენად ხშირად გადმოდიხართ ბაღდათში?",
        answers: [
          { text: "პრაზნიკებზე", score: 10 },
          { text: "ბაღდათობაზე", score: 15 },
          { text: "გაჩითავ რამეს?", score: 5 },
          { text: "სად მცალია ბაღდათში გადმოსასვლელად", score: 0 },
        ],
      },
      {
        question: "რამდენად ხშირად ითიშება შუქი შენს სოფელში?",
        answers: [
          { text: "პატარა თუ წამოთოვა ეგრევე", score: 10 },
          { text: "საკრაულის ხაზზე ვარ", score: 15 },
          { text: "ტორტის შემოტანის დროს", score: 5 },
          { text: " მაინცდამაიც მაშინ როცა გინდა", score: 10 },
        ],
      },
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "შემდეგი";
      showQuestion();
    }
    startQuiz();
    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (currentQuestionIndex < questions.length)
          button.addEventListener("click", function (e) {
            const selectedBtn = e.target;
            selectedBtn.classList.add("correct");
            score += answer.score;
            console.log(score);
            Array.from(answerButtons.children).forEach((button) => {
              button.disabled = true;
            });
            nextButton.style.display = "block";
          });
      });
    }
    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function showScore() {
      resetState();
      if (score <= 150 && score >= 110) {
        questionElement.innerHTML = `შენთვის შესაფერისი საცხოვრებელი ადგილია წითელხევი.`;
      } else if (score <= 110 && score >= 80) {
        questionElement.innerHTML = `შენთვის შესაფერისი საცხოვრებელი ადგილია ობჩა.`;
      } else if (score <= 80 && score >= 40) {
        questionElement.innerHTML = `შენთვის შესაფერისი საცხოვრებელი ადგილია ხანი.`;
      } else {
        questionElement.innerHTML = `შენთვის შესაფერისი საცხოვრებელი ადგილია დიმი.`;
      }
      changeURLPathAndNavigate(`quiz-5-result${score}`);
      let score5 = 0;
      localStorage.setItem("score5", score);
      nextButton.innerHTML = "თავიდან დაწყება";
      nextButton.style.display = "block";
    }
    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });
    startQuiz();

    document.addEventListener("DOMContentLoaded", function () {
      var facebookButton = document.querySelector(".facebook");
      facebookButton.addEventListener("click", function () {
        let score55 = localStorage.getItem("score3");
        if (score55 <= 140 && score55 >= 110) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-5-1.jpg`;
        }
        // URL of the image to share
        else if (score55 <= 110 && score55 >= 80) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-5-2.jpg`;
        } else if (score55 <= 80 && score55 >= 40) {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-5-3.jpg`;
        } else {
          var imageUrl = `https://absolute-new.netlify.app/images/quiz-5-4.jpg`;
        }
        console.log(imageUrl);
        var shareURL =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(imageUrl);
        window.open(shareURL, "Share on Facebook", "width=1050,height=850");
        console.log(shareURL);
      });
    });
  }

  var quiz = {
    quiz1: function () {
      quiz1();
    },
    quiz2: function () {
      quiz2();
    },
    quiz3: function () {
      quiz3();
    },
    quiz4: function () {
      quiz4();
    },
    quiz5: function () {
      quiz5();
    },
  };
  let num1 = Number(localStorage.getItem("num"));
  quiz["quiz" + num1]();
  console.log(num1);
}
