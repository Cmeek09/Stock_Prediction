# Stock_Prediction

## Purpose
 
I'm trying to find a correlation between the fundmentals of a company and compare its performance to a tim series event that can make a relatively accurate prediction to the stock price someitme down the road.


## how to run

1) Make sure you are in the root directory.
    You should see 'venv' in this level.

2) open a terminal to run the following commands.

3) Next activate the virtual enviroment "venv\Scripts\activate".

4) Once the virtual enviroment is running you will need to open the project folder "stock_prediction", simply enter "cd stock_prediction".

5) Now run the server to start a locally ran website, "python manage.py runserver"

6) From you should see a link to a local host, control + click to open the webpage.

 ## The Challenge

Predicting the stock price of a any puiblicly traded company is a very hard problem and most likely not possible.  The model I intended for this would only be loking at performance and check that against time.

## Further goals

I'd like to collect data from various sources, which will be ingested into the model as features and calculate a future stock price based on those features.  It'd be nice to build the models as well to account for more factors that influence stock price, like new stories about company 'x', but for now it will focus on just the fundmentals of it.