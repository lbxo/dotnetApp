<template>
<b-row>
    <b-col cols="12">
        <h2>
            <b-link href="#/add-book">Add SOP</b-link>
        </h2>
        <h3>
            <b-link @click="logout()">Logout</b-link>
        </h3>
        <b-table
            striped
            hover
            :items="books"
            :fields="fields"
        >
            <template
                slot="actions"
                scope="row"
            >
                <b-btn
                    size="sm"
                    @click.stop="details(row.item)"
                >VIEW</b-btn>
                    </template>
                    </b-table>
                    <ul v-if="errors && errors.length">
                        <li
                            v-for="(error, index) of errors"
                            :key="index"
                        >
                            {{error.message}}
                            </li>
                    </ul>
    </b-col>
</b-row>
</template>




<script>
import axios from 'axios'

export default {
    name: 'SopList',
    data() {
        return {
            fields: {
                author: {
                    label: 'Author',
                    sortable: true,
                    'class': 'text-center'
                },
                title: {
                    label: 'SOP Title',
                    sortable: true
                },
                actions: {
                    label: 'Action',
                    'class': 'text-center'
                }
            },
            books: [],
            errors: []
        }
    },
    created() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
        axios.get(`http://localhost:3000/book`)
            .then(response => {
                this.books = response.data
            })
            .catch(e => {
                this.errors.push(e)
                if (e.response.status === 401) {
                    this.$router.push({
                        name: 'Login'
                    })
                }
            })
    },
    methods: {
        details(book) {
            this.$router.push({
                name: 'ShowSop',
                params: {
                    id: book._id
                }
            })
        },
        logout() {
            localStorage.removeItem('jwtToken')
            this.$router.push({
                name: 'Login'
            })
        }
    }
}
</script>
