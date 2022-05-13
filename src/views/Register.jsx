import { Form, Button } from "react-bootstrap";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";

const Register = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const onSubmit = data => console.log("date",data);
    console.log("errors",errors)

    return (
        <div className="container">
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
                <div className="col-6">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter firstName" {...register("firstname", { required: true })} />
                        </Form.Group>
                        {errors && errors.firstname ?
                            <p className="text-danger">first name is required</p> : ''
                        }
                        <Form.Group className="mb-3" controlId="formBasicSecondName">
                            <Form.Label>Second Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter secondName"  {...register("secondname", { required: true })} />
                        </Form.Group>
                        {errors && errors.secondname ?
                            <p className="text-danger">second name is required</p> : ''
                        }

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />

                        </Form.Group>
                        {errors && errors.email ?
                            <p className="text-danger">Email is required</p> : ''
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>select your favorite food ...</Form.Label>
                            <Controller
                                name="favoritefood"
                                control={control}
                                rules={{required:true}}
                                render={({ field }) => <Select
                                    {...field}
                                    options={options}
                                    isMulti
                                />}
                            />
                        </Form.Group>
                        {errors && errors.favoritefood ?
                            <p className="text-danger">please select favorite food</p> : ''
                        }
                        <Form.Group className="mb-3" controlId="formBasicGender" >
                            <Form.Label>Gender</Form.Label>

                            <Form.Check
                                type="radio"
                                id="default-radio1"
                                name="gender"
                                label="Male"
                                {...register("gender", { required: true })}
                            />
                            <Form.Check
                                type="radio"
                                id="default-radio2"
                                name="gender"
                                label="Female"
                                {...register("gender", { required: true })}
                            />
                        </Form.Group>
                        {errors && errors.gender ?
                            <p className="text-danger">gender is required</p> : ''
                        }

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {errors && errors.password ?
                            <p className="text-danger">Password is required</p> : ''
                        }
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="phone...." {...register("phone", { required: true })} />
                        </Form.Group>
                        {errors && errors.phone ?
                            <p className="text-danger">Phone is required</p> : ''
                        }
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Register;