  cipher_korean = ("e".."z").to_a + ("a".."d").to_a   # ["e","f","g"..."d"]     
     
    decoded = []
                                                                     # go back 4 letters
     cipher_korean.each do |char|
           cipher_english = cipher_korean[cipher_korean.each_index { |char| (char - 4) } ]
           decoded << cipher_english
     end
     
     p decoded
