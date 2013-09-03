require 'json'

class Facts
  fact_file = "data/facts.json"
    fact_json = File.read(fact_file)
    @@the_facts = JSON.parse(fact_json)["facts"]

  def get_fact(id)

    #puts the_facts["facts"].length
    if (0..@@the_facts.length-1).include?(id)
      @@the_facts[id]["fact"]
    else
      "Fun Fact: There is no fact ##{id}"
    end
  end

  def count
    @@the_facts.length
  end

end