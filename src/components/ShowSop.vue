<template>
<b-row>
    <b-col cols="12">
        <h2>
            Edit SOP
        </h2>
        <h3>
            <b-link href="#/">Back to Home</b-link>
        </h3>
        <b-jumbotron>
            <template slot="header">
                {{book.title}}
            </template>
            <template slot="lead">
                Author: {{book.author}}<br> Description: {{book.description}}<br>
            </template>
            <hr class="my-4">
            <p>
                Updated Date: {{book.updated_date}}
            </p>
            <b-btn
                variant="success"
                @click.stop="EditSop(book._id)"
            >Edit</b-btn>
                <b-btn
                    variant="danger"
                    @click.stop="deletebook(book._id)"
                >Delete</b-btn>
        </b-jumbotron>
    </b-col>
</b-row>
</template>


<script>
import axios from 'axios'

export default {
    name: 'ShowSop',
    data() {
        return {
            book: []
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
        EditSop(bookid) {
            this.$router.push({
                name: 'EditSop',
                params: {
                    id: bookid
                }
            })
        },
        deletebook(bookid) {
            axios.delete('http://localhost:3000/book/' + bookid)
                .then((result) => {
                    this.$router.push({
                        name: 'SopList'
                    })
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
}
</script>


<style>
.jumbotron {
    padding: 2rem;
}
</style>
