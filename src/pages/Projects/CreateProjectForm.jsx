import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { useForm } from 'react-hook-form'
import { tags } from '../ProjectList/ProjectList'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useDispatch } from 'react-redux'
import { createProject } from '@/Redux/Project/Action'
import { useNavigate } from 'react-router-dom'


const CreateProjectForm = () => {

    const navigate=useNavigate()

    const dispatch=useDispatch();

    const handleTagsChange=(newValue)=>{
   const currentTags=form.getValues("tags");

   const updatedtags=currentTags.includes(newValue)?
   currentTags.filter(tag=> tag !== newValue):[...currentTags,newValue];

   form.setValue("tags",updatedtags)
    }


    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: []
        }
    })

    const onSubmit = (data) => {
        dispatch(createProject(data));
        console.log("create data", data);
    }

    return (


        <div>
            <Form {...form}>

                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="name"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="projects name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />
                    <FormField control={form.control}
                        name="description"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="projects description..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />
                    <FormField control={form.control}
                        name="category"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Select
                                    defaultValue='fullstack'
                                    value={field.value}
                                    onValueChange={(value) => {
                                        field.onChange(value)
                                    }}
                                    className="border w-full border-gray-700 py-5 px-5"
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Category"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>

                                        <SelectItem value="Fullstack">Full stack</SelectItem>

                                        <SelectItem value="Frontend">Frontend</SelectItem>
                                        <SelectItem value="Backend">Backend</SelectItem>
                                    </SelectContent>
                                </Select >

                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />

                    <FormField control={form.control}
                        name="tags"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Select
                                   
                                    onValueChange={(value) => {
                                        handleTagsChange(value)
                                    }}
                                    className="border w-full border-gray-700 py-5 px-5"
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Tags"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>

                                        {tags.map((item)=> 
                                         <SelectItem key={item} value={item}>{item}</SelectItem>)}

                                    
                                    </SelectContent>
                                </Select >

                            </FormControl>
                            
                            <div className='flex gap-1 flex-wrap'>
                                
                               {field.value.map((item)=> <div key={item} onClick={()=>
                               handleTagsChange(item)} 
                               className='curser-pointer flex rounded-full
                                items-center border gap-2 px-4 py-1'>
                                    <span className='text-sm'>{item} </span>
                                    <Cross1Icon className='h-3 w-3'/>
                                </div> )}
                            </div>

                            <FormMessage />
                        </FormItem>}
                    />




                    <DialogClose>
                        {false ? (<div><p>You can create only 3 project with free plan,
                            for more please upgrade your plan</p></div>) :

                            (<Button type="submit" className="full mt-5">
                                Create Project
                            </Button>)

                        }
                    </DialogClose>

                </form>

            </Form>
        </div>

    )
}

export default CreateProjectForm