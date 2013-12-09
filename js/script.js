/* **************************************

	Piggy Bank Code in JavaScript.<jQuery Version:0.1>
	Created By : Prashant Sani.
	Website : www.prashantsani.com/spider/PiggyBank.JS
	License : www.opensource.org/licenses/mit-license.php
	Inspiration :
	JavaScript/HTML5 Course in Rajesh Patkar Institute
	www.rajeshpatkar.com/Courses/javascript-technology

************************************** */

var AccountHolder,
noPiggyBnks,
piggyBanks =[],
SelectedPB=0;

/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
;(function(V){function N(h,l,k){var f=h[0],j=/er/.test(k)?S:/bl/.test(k)?s:T;active=k==H?{checked:f[T],disabled:f[s],indeterminate:"true"==h.attr(S)||"false"==h.attr(o)}:f[j];if(/^(ch|di|in)/.test(k)&&!active){P(h,j)}else{if(/^(un|en|de)/.test(k)&&active){i(h,j)}else{if(k==H){for(var j in active){active[j]?P(h,j,!0):i(h,j,!0)}}else{if(!l||"toggle"==k){if(!l){h[M]("ifClicked")}active?f[R]!==g&&i(h,j):P(h,j)}}}}}function P(w,u,n){var v=w[0],l=w.parent(),k=u==T,x=u==S,j=x?o:k?e:"enabled",f=U(v,j+d(v[R])),t=U(v,u+d(v[R]));if(!0!==v[u]){if(!n&&u==T&&v[R]==g&&v.name){var h=w.closest("form"),y='input[name="'+v.name+'"]',y=h.length?h.find(y):V(y);y.each(function(){this!==v&&V.data(this,Q)&&i(V(this),u)})}x?(v[u]=!0,v[T]&&i(w,T,"force")):(n||(v[u]=!0),k&&v[S]&&i(w,S,!1));c(w,k,u,n)}v[s]&&U(v,a,!0)&&l.find("."+q).css(a,"default");l[B](t||U(v,u));l[O](f||U(v,j)||"")}function i(x,v,u){var w=x[0],t=x.parent(),l=v==T,r=v==S,k=r?o:l?e:"enabled",j=U(w,k+d(w[R])),h=U(w,v+d(w[R]));if(!1!==w[v]){if(r||!u||"force"==u){w[v]=!1}c(x,l,k,u)}!w[s]&&U(w,a,!0)&&t.find("."+q).css(a,"pointer");t[O](h||U(w,v)||"");t[B](j||U(w,k))}function b(f,j){if(V.data(f,Q)){var h=V(f);h.parent().html(h.attr("style",V.data(f,Q).s||"")[M](j||""));h.off(".i").unwrap();V(L+'[for="'+f.id+'"]').add(h.closest(L)).off(".i")}}function U(f,j,h){if(V.data(f,Q)){return V.data(f,Q).o[j+(h?"":"Class")]}}function d(f){return f.charAt(0).toUpperCase()+f.slice(1)}function c(h,k,j,f){if(!f){if(k){h[M]("ifToggled")}h[M]("ifChanged")[M]("if"+d(j))}}var Q="iCheck",q=Q+"-helper",g="radio",T="checked",e="un"+T,s="disabled",o="determinate",S="in"+o,H="update",R="type",B="addClass",O="removeClass",M="trigger",L="label",a="cursor",m=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);V.fn[Q]=function(x,t){var p=":checkbox, :"+g,w=V(),n=function(h){h.each(function(){var v=V(this);w=v.is(p)?w.add(v):w.add(v.find(p))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(x)){return x=x.toLowerCase(),n(this),w.each(function(){"destroy"==x?b(this,"ifDestroyed"):N(V(this),!0,x);V.isFunction(t)&&t()})}if("object"==typeof x||!x){var l=V.extend({checkedClass:T,disabledClass:s,indeterminateClass:S,labelHover:!0},x),k=l.handle,j=l.hoverClass||"hover",u=l.focusClass||"focus",A=l.activeClass||"active",r=!!l.labelHover,C=l.labelHoverClass||"hover",f=(""+l.increaseArea).replace("%","")|0;if("checkbox"==k||k==g){p=":"+k}-50>f&&(f=-50);n(this);return w.each(function(){b(this);var y=V(this),v=this,I=v.id,G=-f+"%",F=100+2*f+"%",F={position:"absolute",top:G,left:G,display:"block",width:F,height:F,margin:0,padding:0,background:"#fff",border:0,opacity:0},G=m?{position:"absolute",visibility:"hidden"}:f?F:{position:"absolute",opacity:0},D="checkbox"==v[R]?l.checkboxClass||"icheckbox":l.radioClass||"i"+g,z=V(L+'[for="'+I+'"]').add(y.closest(L)),E=y.wrap('<div class="'+D+'"/>')[M]("ifCreated").parent().append(l.insert),F=V('<ins class="'+q+'"/>').css(F).appendTo(E);y.data(Q,{o:l,s:y.attr("style")}).css(G);l.inheritClass&&E[B](v.className);l.inheritID&&I&&E.attr("id",Q+"-"+I);"static"==E.css("position")&&E.css("position","relative");N(y,!0,H);if(z.length){z.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(K){var J=K[R],h=V(this);if(!v[s]){if("click"==J?N(y,!1,!0):r&&(/ve|nd/.test(J)?(E[O](j),h[O](C)):(E[B](j),h[B](C))),m){K.stopPropagation()}else{return !1}}})}y.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(J){var h=J[R];J=J.keyCode;if("click"==h){return !1}if("keydown"==h&&32==J){return v[R]==g&&v[T]||(v[T]?i(y,T):P(y,T)),!1}if("keyup"==h&&v[R]==g){!v[T]&&P(y,T)}else{if(/us|ur/.test(h)){E["blur"==h?O:B](u)}}});F.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(J){var K=J[R],h=/wn|up/.test(K)?A:j;if(!v[s]){if("click"==K){N(y,!1,!0)}else{if(/wn|er|in/.test(K)){E[B](h)}else{E[O](h+" "+A)}if(z.length&&r&&h==j){z[/ut|nd/.test(K)?O:B](C)}}if(m){J.stopPropagation()}else{return !1}}})})}return this}})(jQuery);

//SHow Custom Lightbox
function SPIDerAlert(txt){
	$('.customLBText').html(txt);
	$('.customLBOverlay').fadeIn();
	$('.customLBData').fadeIn();
}

//Closing The Custom Lightbox
$('.customLBDataBtn,.customLBOverlay').click(function(){
	$('.customLBOverlay,.customLBData').fadeOut();
});
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
  	if( $('.customLBDataBtn').is(':visible') ) {
		$('.customLBOverlay,.customLBData').fadeOut();
  	}
  } 
});


//Constructor Function For Creating Piggy Banks
function PiggyBank(v){
    
    var balance=v;
    var lt=v;
    
    function deposit(amount,statement){
        balance=balance+amount;
        lt=amount;
        $('.transcnList').prepend(statement);
    }
    
    function withdraw(amount,statement){
        if(balance>=amount){
            balance=balance-amount;
            lt= -amount;
            $('.transcnList').prepend(statement);
        }
        else{
        	$('.transcnList').prepend('<li>Error: You can \'t withdraw more than Balance</li>')
        }
    }
    
    function sayBal(){
    	$('.userBalanceAmt').html(balance)
    }

    function sayLT(){
    	$('.lstTranscnAmt').html(lt)
    }

    function statement(amount,i){
	    $('.transcnList').prepend('<li>Created Piggy Bank'+i+' With Balance of INR '+amount+'</li>')
    }
    
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.statement = statement;
    this.sayBal = sayBal;
    this.sayLT = sayLT;    
    
}


//Screen1
$('.screen1Submit').click(function(event){
	event.preventDefault();
	AccountHolder= $('#PBHolder').val();
	noPiggyBnks = $('#noPiggyBnk').val();

	if(AccountHolder==""|| AccountHolder===undefined){
		SPIDerAlert('Please Enter Your Name');
		$('input[name=PBHolder]').focus();
		return false;
	}
	else if(noPiggyBnks==""|| AccountHolder===undefined){
		SPIDerAlert('Please Enter Number Of Piggy Banks');
		$('input[name=PBHolder]').focus();
		return false;
	}
	else if(noPiggyBnks>5){
		SPIDerAlert('OOPS! Only 5 Piggy Banks Allowed per Account');
		$('input[name=PBHolder]').focus();
		return false;
	}
	else if(noPiggyBnks<1){
		SPIDerAlert('OOPS! Enter a Value Between 1 and 5');
		$('input[name=PBHolder]').focus();
		return false;
	}
	else{
		for(var i=1;i<=noPiggyBnks;i++){
			var PBInit='<p><label for="InitBalPB'+i+'">Piggy Bank '+i
						+' (PB'+i+') <span class="rupeeSymbol"></span></label>'
						+'<input type="number" placeholder="0" id="InitBalPB'
						+i+'" name="InitBalPB'+i+'" class="PBInintVal" min="0"></p>'
			$('.initBalContain fieldset').append(PBInit);
		}

		$('.screen1Contain').fadeOut(function () {
			$('.screen2Contain').fadeIn();
		});

		//Setting Up User Name
		$('.userName').html(AccountHolder)

	}
	return false;
});


$('.screen2Submit').click(function(event){
	event.preventDefault();


	$('.PBInintVal').each(function(index){
		var initVal= this.value;
		if(initVal==undefined || initVal==""){initVal=0}
		piggyBanks[index]=new PiggyBank(parseInt(initVal));
		piggyBanks[index].statement(initVal,index+1)

	});

	for(var i=1;i<=noPiggyBnks;i++){
		if(i==1){
			//1st Piggy Bank Should be checked.
			var PBLst=  '<li><input type="radio" name="piggyBankSelect" id="piggyBank'+i+'" checked class="piggyBankSelect styled" value="PB'+i+'">'
						+'<label for="piggyBank'+i+'">Piggy Bank'+i+'</label>'
						+'</li>'
		}
		else{
			var PBLst=  '<li><input type="radio" name="piggyBankSelect" id="piggyBank'+i+'" class="piggyBankSelect styled" value="PB'+i+'">'
						+'<label for="piggyBank'+i+'">Piggy Bank'+i+'</label>'
						+'</li>'
		}
		$('.piggyBankList').append(PBLst);
	}

	$('.screen1N2Contain').fadeOut(function(){
		//Activating iCheck
		$('.styled').iCheck({
			checkboxClass: 'styledCheckbox',
			radioClass: 'styledRadio',
			increaseArea: '50%',
		});
		//Activating Click Handle
		$('.styled').on('ifChecked', function(event){
			var $this = $(this);
			SelectedPB=parseInt($this.attr('id').replace('piggyBank','')-1);
			piggyBanks[SelectedPB].sayBal();
			piggyBanks[SelectedPB].sayLT();
		});
		//Showing 1st Piggy Bank's Balance
		piggyBanks[0].sayBal();
		piggyBanks[0].sayLT();
		$('.screen3Contain').fadeIn();
	})
	return false;
});

//Deposit
$('.depositSubmit').click(function (event) {
	event.preventDefault();

	var $depositAmt= $('#depositAmt').val();

	if($depositAmt==""){
		SPIDerAlert('Please Enter The Amount to be Deposited');
	}
	else if(typeof(parseInt($depositAmt)) !="number"){
		SPIDerAlert('Please Enter The Amount in Numericals');
	}
	else{
		$depositAmt = parseInt($depositAmt);
		var statement = "<li><span class='rupeeSymbol'></span> "+ $depositAmt + " in Piggy Bank " + parseInt(SelectedPB+1) +"</li>"
		piggyBanks[SelectedPB].deposit($depositAmt,statement);

		piggyBanks[SelectedPB].sayBal();
		piggyBanks[SelectedPB].sayLT();
	}

	//Reset Value of Deposit Input
	$('#depositAmt').val('');

	return false;
});

//Withdraw
$('.withdrawSubmit').click(function (event) {
	event.preventDefault();

	var $WithdrawAmt= parseInt($('#WithdrawAmt').val());

	if($WithdrawAmt==""){
		SPIDerAlert('Please Enter The Amount to be Withdrawed');
	}
	else if(typeof(parseInt($WithdrawAmt)) !="number"){
		SPIDerAlert('Please Enter The Amount in Numericals');
	}
	else{
		$WithdrawAmt =parseInt($WithdrawAmt);
		var statement = "<li><span class='rupeeSymbol'></span> "+ $WithdrawAmt + " Withdrawed in Piggy Bank " + parseInt(SelectedPB+1) +"</li>"
		piggyBanks[SelectedPB].withdraw($WithdrawAmt,statement);

		piggyBanks[SelectedPB].sayBal();
		piggyBanks[SelectedPB].sayLT();
	}


	//Reset Value of Deposit Input
	$('#WithdrawAmt').val('');

	return false;
})


