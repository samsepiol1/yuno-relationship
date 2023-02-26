require 'pg'
ale_number = rand(0..9)
cont = 0
con = nil
#def generate_code(number)
  #ale_number = rand(0..10)
  #charset = Array('A'..'Z') + Array('a'..'z')
  #Array.new(number) { charset.sample }.join
#end

def generate_cod(number)
    charset = Array('A'..'Z') + Array('a'..'z') + Array(1..10)
	string = Array.new(number) {charset.sample}.join
	if string.length > 11
		nil
	else
		begin

		con = PG.connect :dbname => 'postgres', :user => 'postgres'
		puts con.server_version
		#con.exec "DROP TABLE IF EXISTS code_num"
		#con.exec "CREATE TABLE code_num(Code_Num varchar(20))"
		#con.exec "INSERT INTO code_num VALUES('#{string}')"
		t_msg = []
		#code = con.exec 'SELECT * FROM code_num'
		puts string
		rescue PG::Error => e

			puts e.message 
    
		ensure

			con.close if con
    
		end
		
	end
end

generate_cod(11)
#testio = (1..10).each {generate_cod(11)}

#number_test = 5

begin

    
	#testio2 = generate_cod(11)
	
	#Drop Database
	#con.exec "DROP TABLE IF EXISTS CODE_NUM"
	#Create database
	#con.exec "CREATE TABLE Code_Num(code_num INT)"
	#con.exec "INSERT INTO Code_Num VALUES(#{testio2})"
	

rescue PG::Error => e

    puts e.message 
    
ensure

    con.close if con
    
end

#charset.each do |number|
#end

#numbers = [1, 2, 3, 4, 5]
#sum = 0
#numbers.each do |number|
  #sum += number
#end

#sum = numbers.inject do |a, number|
   #a + number
#end
