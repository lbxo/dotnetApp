<template>
<b-row>
    <b-col cols="12">
        <h2>
            Edit SOP
        </h2>
        <h3>
            <router-link :to="{ name: 'ShowSop', params: { id: book._id } }">Back</router-link>
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
                                    :max-rows="6"
                                >{{book.description}}</b-form-textarea>
                                    </b-form-group>
                                    <b-button
                                        type="submit"
                                        variant="primary"
                                    >Update</b-button>
        </b-form>
    </b-col>
</b-row>
</template>



<script>
import axios from 'axios'

export default {
    name: 'EditSop',
    data() {
        return {
            book: {}
        }
    },
    created() {
        axios.get(`http://localhost:3000/book/` + this.$route.params.id)
            .then(response => {
                this.book = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            axios.put(`http://localhost:3000/book/` + this.$route.params.id, this.book)
                .then(response => {
                    this.$router.push({
                        name: 'ShowSop',
                        params: {
                            id: this.$route.params.id
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
