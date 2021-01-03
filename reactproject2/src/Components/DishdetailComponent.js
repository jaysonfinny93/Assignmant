import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Commentform from './CommentformComponent' ;
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


    
  
function RenderComments({comments, postComment, dishId}) {
       
        if(postComment!==null){
            const data=postComment.map(e=>{return(<div>{e.comment}<br></br>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(e.date)))}</div>)})
        return(
            <div>
                <Stagger in>
                <Fade in>
               <h4>comments</h4>
               {data}
               </Fade>
               </Stagger>
              </div>
            
            
            );
            
        }
        else{
            return(<div>
            </div>);
        }
    }
    
    function RenderDish({dish}){
        if (dish.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (dish.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{dish.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (dish != null) 
        
        if(dish!==null){
        return(
        
        
            <div >
       
       <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
            </div>
          
            
            );
           
            
        }
        else{
            return(<div>
            </div>);
        }
    }
    const Dishdetail=(props)=>{
        console.log("dish");
        if(props.dish !=null)
        {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments postComment={props.comments}
                                  />
                        <Commentform dishId={props.dish.id} postComment={props.postComment} />
                   </div>
                </div>
                </div>
            );
        }
        else{
           return(
            <div>
           </div>);
        }
    }

export default Dishdetail;