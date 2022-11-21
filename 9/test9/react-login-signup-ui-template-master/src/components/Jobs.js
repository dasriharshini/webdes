import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { blue } from '@material-ui/core/colors';
function Jobs(){
    const dataCollection = [
        {
          id: 1,
          title: 'Data Engineer - Microsoft Corporation'
        }, {
          id: 2,
          title: 'SDE - Apple Inc.'
        }, {
          id: 3,
          title: 'UI/UX Developer - Google'
        }
      ];
    return(
        <div style={{}}>
        <h4>Jobs Here</h4>
        <Card
          style={{
            width: 1300,
            height: 480,
            backgroundColor:"yellow",
            margin:'5%'
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              Greetings of the day
            </Typography>
            <Typography variant="h5" component="h2">
              How are you ?
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
              }}
              color="textSecondary"
            >
              Keep Motivated
            </Typography>
            <div>Jobs are listed as Follows:</div>
      <ul>
        {
          dataCollection.map((item) =>
            <li key={item.id}>{item.title}</li>
          )
        }
      </ul>
    
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Stay Safe.....</Button>
          </CardActions>
        </Card>
      </div>
    )
}

export default Jobs