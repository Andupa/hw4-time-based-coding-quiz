      
 
 var body = document.body;

 var h3El = document.createElement('h3');
 var pEl = document.createElement('p');
 
 var allQuestionsDiv = document.createElement('div');
 
 var question1Div = document.createElement('div');
 var question1OlEl = document.createElement('ol');
 var question1Li1 = document.createElement('li');
 var question1Li2 = document.createElement('li');
 var question1Li3 = document.createElement('li');
 var question1Li4 = document.createElement('li');

 var question2Div = document.createElement('div');
 var question2OlEl = document.createElement('ol');
 var question2Li1 = document.createElement('li');
 var question2Li2 = document.createElement('li');
 var question2Li3 = document.createElement('li');
 var question2Li4 = document.createElement('li');

 h3El.textContent ='Coding Quiz Challenges';
  
 pEl.textContent ='Try to answer the following code-related questions within \
 the time limit. Keep in mind that incorrect answers will penalize your scoretime';

 allQuestionsDiv.textContent = " ";
 question1Div.textContent = " ";
 question2Div.textContent = " ";
 
 pEl.appendChild(allQuestionsDiv);
 
 allQuestionsDiv.appendChild(question1Div); 
 allQuestionsDiv.appendChild(question2Div); 



 question1OlEl.textContent = 'Commonly used data types DO NOT include:';
 question1Li1.textContent='string';
 question1Li2.textContent='booleans';
 question1Li3.textContent='alerts';
 question1Li4.textContent='numbers';

 question2OlEl.textContent = 'Arrays JavaScript can be used to store----';
 question2Li1.textContent='numbers and string';
 question2Li2.textContent='other arrays';
 question2Li3.textContent='booleans';
 question2Li4.textContent='all of the above';
  
 body.appendChild(h3El);
  body.appendChild(pEl);
question1Div.appendChild(question1OlEl);

question1OlEl.appendChild(question1Li1);
question1OlEl.appendChild(question1Li2);
question1OlEl.appendChild(question1Li3);
question1OlEl.appendChild(question1Li4);

question2Div.appendChild(question2OlEl);

question2OlEl.appendChild(question2Li1);
question2OlEl.appendChild(question2Li2);
question2OlEl.appendChild(question2Li3);
question2OlEl.appendChild(question2Li4);

var li1Els = [question1Li1, question1Li2, question1Li3, question1Li4];
for (var i= 0; i< li1Els.length; i++) {
    li1Els[i].style.backgroundColor='orchid';
    li1Els[i].style.marginTop= "5px";
    li1Els[i].style.marginRight= "90%";
}

var liEls = [question2Li1, question2Li2, question2Li3, question2Li4];
for (var i= 0; i< liEls.length; i++) {
    liEls[i].style.backgroundColor='orchid';
    liEls[i].style.marginTop= "5px";
    liEls[i].style.marginRight= "90%";
}