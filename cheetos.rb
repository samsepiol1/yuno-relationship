def generate_code(number)
    charset = Array('A'..'Z') + Array('a'..'z')
    Array.new(number) {charset.sample}.join
end
string2 = generate_code(11)
puts string2.upcase  

number_s = rand(1..5).to_s
string = (0...4).map { (65 + rand(26)).chr + number_s}.join

puts string
#puts "Tamanho da String:  #{string.length}"
#string.each_byte {|c| puts c}

