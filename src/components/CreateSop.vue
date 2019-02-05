<template>
<b-row>
    <b-col cols="12">
        <h2>
            Add an Entry
        </h2>
        <h3>
            <b-link href="#/">Back to Home</b-link>
        </h3>
        <b-form @submit="onSubmit">
            <b-form-group
                id="fieldsetHorizontal"
                horizontal
                :label-cols="4"
                breakpoint="md"
                label="Enter Title"
            >
                <b-form-input
                    id="title"
                    :state="state"
                    v-model.trim="book.title"
                ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Author"
                    >
                        <b-form-input
                            id="author"
                            :state="state"
                            v-model.trim="book.author"
                        ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="fieldsetHorizontal"
                                horizontal
                                :label-cols="4"
                                breakpoint="md"
                                label="Enter Description"
                            >
                                <b-form-textarea
                                    id="description"
                                    v-model="book.description"
                                    placeholder="Enter something"
                                    :rows="2"
                                    :max-rows="100"
                                >{{book.description}}</b-form-textarea>
                                    </b-form-group>
                                    <b-button
                                        type="submit"
                                        variant="primary"
                                    >Save</b-button>
        </b-form>
    </b-col>
</b-row>
</template>



<script>
import axios from 'axios'

export default {
    name: 'CreateSop',
    data() {
        return {
            book: {}
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            axios.post(`http://localhost:3000/book`, this.book)
                .then(response => {
                    this.$router.push({
                        name: 'ShowSop',
                        params: {
                            id: response.data._id
                        }
                    })
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
}
</script>
