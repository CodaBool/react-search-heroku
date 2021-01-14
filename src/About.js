import React from 'react'
import Row from 'react-bootstrap/Row'

export default function About() {
  return (
    <>
      <h1 className="display-1 my-5">About</h1>
      <h4 className="text-muted text-center">
        A Company Search engine for Confluence, JIRA, and a ticketing system.
      </h4>
      <hr />
      <p className="p-1">
        &emsp;
        This is a sample of a production application which I developed for my DevOps position at Ellucian.
        It is a Machine Learning search engine built off of <strong>Elastic Search</strong>.
        It is fed data from the internal systems that the company used, such as <strong>Confluence</strong>, Service Now (ticketing system), and <strong>JIRA</strong>.
        I worked to develop Python scripts which could store the data and then load it into the search engine.
        Then Elastic Search offers an API which is called to get results based on the search terms.
        These results are ordered by their confidence ratio.
        
        <br/><br/>
        &emsp;
        I configured this to work on an AWS EC2, the requirements for ElasticSearch JVM is large as it by default requires 1GB of RAM.
        I scaled up the instance to a t2.Medium and was able to setup nginx which handled incoming requests.
        I allowed external GET requests and only GET requests to the Elastic Search.
        This helped to secure the many endpoints in the Elastic Search.
        I also configured Elastic Search to use its security system.
        I created a role and user through its endpoints.
        This allowed me to create authentication for the application and require the username and password to be passed in the request headers.
        This made the application secure as possible.
        The reasoning for this is that Elastic Search exposes powerful endpoints which can perform all CRUD operations.
        There is also sensitive information stored in the company's internal resources.
        Putting all Confluence Articles (where the company stored documentation) indiscriminately into the search engine could expose sensitive information.
        Especially considering Ellucian serves Higher Education customers who have students protected under FERPA, a federal law for keeping data secure similar to the medical HIPPA laws.

        <br/><br/>
        &emsp;
        I wrote the documentation for how I configured the engine and nginx.
        This involved systemctl commands, nginx config files, Python commands, installation guide.
        As well as the process for the Python scripts which use an html parser for storing the data.
        In the future I would like to find a lighter option the Elastic Search.
        I liked working with Elastic Search but the requirements are intensive and will quickly run up a high cost.
        Something which is simplier must be built and available out there.
        I would like to find that and learn how to made an effective search engine for projects like my Market project.
        There I included a search bar at the top navigation but it does not perform any search as of right now.
        I am using React and a npm package would be ideal for this solution.
        For now I am glad I learned more about Python scripting and the Elastic Search engine.
        Overall this project was a great experience.  
      </p>
    </>
  )
}
