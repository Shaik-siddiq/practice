
var employee1 = {firstname:'siddiq', lastname:'shaik'}
var employee2 = {firstname:'imran', lastname:'Ahmed'}

function invite(greeting1, greeting2) {
    console.log(greeting1 +' ' +this.firstname +' ' +this.lastname+' ' +greeting2);
}
//call func//
invite.call(employee1, 'assalamualykum','how are you' );
invite.call(employee2, 'assalamualykum','how are you' );
//apply func//
invite.apply(employee1, ['hey dude', 'what going on'] );
invite.apply(employee2,['hello macha','enna pandringa']);
//bind func//
var inviteemployee1 = invite.bind(employee1);
var inviteemployee2 = invite.bind(employee2);
inviteemployee1('bol bhai','kya chalra');
inviteemployee2(' bol bhai','masst mazze kar raha bhai thu');

