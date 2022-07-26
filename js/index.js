function insrtOperator(num) {
 let operator = /(\/|\+|-|\*)$/;

  if (operator.test($('.calc-display').val())) {
    del();
    $('.calc-display').val($('.calc-display').val() + num);
  } else {
    $('.calc-display').val($('.calc-display').val() + num);
  }
}

function insrt(num) {
    if ($('.calc-display').val() === '0') {
        del()
        $('.calc-display').val($('.calc-display').val() + num);
    } else {
        $('.calc-display').val($('.calc-display').val() + num);
    }
}

function eql() {
  let numbers = $('.calc-display').val()

  function evil(fn) {
    return new Function('return ' + fn)();
  }

   $('.calc-display').val(evil($('.calc-display').val()));
        if (!isFinite($('.calc-display').val())) {
            $('.calc-display').val('ERROR')
            
        } else {
          let result = $('.calc-display').val()
              $('.list-item').prepend('<li>' + '<button class="btn-circle">&#9675;</button>' 
              + ' ' 
              + `${numbers} = ${result}` 
              + ' ' 
              + '<button class="btn-del">&#10006;</button>');
        }


        $('.btn-circle').click(function() {
            $(this).toggleClass('bg-red')
        })
        $('.btn-circle').mouseenter(function() {
            $(this).css('color', 'red')
        })
        $('.btn-del').click(function() {
            $(this).parent($('.btn-del')).remove();
        })
        $('.btn-del').mouseenter(function() {
            $(this).addClass('red')
        })
        $('.btn-del').mouseleave(function() {
            $(this).removeClass('red')
        })
    }

function c() {
  $('.calc-display').val('0');
}
function del() {
 let value = $('.calc-display').val();
  $('.calc-display').val(value.substring(0, value.length - 1));
}
$('.list').scroll(function () {
    console.log(`Scroll Top: ${$(this).scrollTop()}`);
  })