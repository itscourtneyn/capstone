
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseContributor,chooseIngredients, chooseInstructions, chooseID } from "../redux/slices/RootSlice"


interface RecipeFormProps {
  id?: string[];
  onClose: () => void;
}

const RecipeForm = ( props:RecipeFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseID(data.id));
      dispatch(chooseTitle(data.title));
      dispatch(chooseContributor(data.contributor));
      dispatch(chooseIngredients(data.ingredients));
      dispatch(chooseInstructions(data.instructions));




      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
  
        {/* <label htmlFor="Picture" > Picture</label>
            <Input {...register("picture")} name = 'picture' placeholder="Picture"
              fileType="file" /> */}

        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="contributor">Contributor</label>
          <Input {...register('contributor')} name='contributor' placeholder="Contributor" />
        </div>
        <div>
          <label htmlFor="prep_time">Prep Time</label>
          <Input {...register('prep_time')} name='prep_time' placeholder="Prep Time" />
        </div>
        <div>
          <label htmlFor="rise_time">Rise Time</label>
          <Input {...register('rise_time')} name='rise_time' placeholder="Rise Time" />
        </div>
        <div>
          <label htmlFor="bake_time">Bake Time</label>
          <Input {...register('bake_time')} name='bake_time' placeholder="Bake Time" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Input {...register('ingredients')} name='ingredients' placeholder="Ingredients" />
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <Input {...register('instructions')} name='instructions' placeholder="Instructions" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-rose-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm