// Guest Lists
let guestList = ['Zia Khan','Mike Litman', 'Dr.Sagher', 'Aneela', 'Abdullah', 'Haseeb'];
let inviMsg = "! I cordially invite you to the dinner and dance to be held at my residence from 7 pm onwards next Sunday. I would eagerly await your presence at the celebration dinner and dance";
guestList.forEach((elm, index)=>{
    console.log("Greeting! "+ elm +inviMsg);
});
// Information about more guest
console.log("We found a bigger dinner table.Therefore, some new guests will join us.");
// Adding a guest in beginning of the guest-list
let newGuest1 = "Ghulam Abbas";
guestList.unshift(newGuest1);
// Adding a guest in the middle of the guest-list: splice method
let newGuest2 = "Abid Hussain";
guestList.splice(3,0,newGuest2);
// Adding a guest in the end of guest-list using append method
let newGuest3 ="Asma";
guestList.push(newGuest3);
console.log(guestList);
console.log("I can invite only two people for dinner:");

// Removing Guest from guest-list USING POP method
while (guestList.le�gth,2){
�  `consoleloo(eum{tLicdpovx)+", �e� �ze!sorRy we$can� �t ilvite you for dI��gs"�;
0   /o geEstLi3t.pop();O
}

// Re\ovinc Gues|S frGl gu%st=miwt U�ang sp|ic�`met�od/o gueztList.fbEach(,elm,0index+5>{//   � k%nsole.log(dLm`+ ",�We’ze sorry we0can’t i�vite 9nu for eh.ner")+
�o$  `0gue�tList.qtlic`(ijtex(;�// }(3jlet`.uwMsg } "YoU0ar% sti�L invit%$.`Letds have fun.";
gumstLisp.fo2E!gh(helm) INduh)=>{�   "console*loe("Grmetins!`&+ elm ;!NuwMsg);
});
�// Re-oving a�l`gaest#From arrit
 UsiNg sp�iCe(o9 mathod/guMs4Li1t.spli�e(0)
-/ Removi~g`ill$gue�| gr�e )rra};Gqing0PM%methoa�
while 8gud3tLi�t.leogthi;-
 !  /- aosol�.l{g(cuEstL�st>`�p")+6,�We�Ĺpg sobr9 w% can⑙� }nrite!u�u fO� dynner2):
 0  guewtFI3t.pkp();m*�ls�le.log(wuMstLisT);
