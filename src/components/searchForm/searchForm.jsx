import React, { useState } from 'react'
import { useNavigate, generatePath } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl'
import { Categories, Form, Search, SortCase, Fieldset, Filler, Label, Submit } from './searchForm.style'

function SearchForm({ title, sortby, cat }) {
    const navigate = useNavigate()
    const [search, setSearch] = useState(title)
    const [sort, setSort] = useState(sortby)
    const [category, setCategory] = useState(cat)

    const handlerSubmit = (event) => {
        event.preventDefault()

        if (search) {
            let path = generatePath('/books/:cat/:title/:sortby', { title: encodeURIComponent(search), sortby: sort.toLowerCase(), cat: category.toLowerCase() })
        
            navigate(path)
        }
    }

    return <>
        <Form autoComplete="off" action=":title&:sortby&:cat" onSubmit={ handlerSubmit }>
                <Filler>
                    <Fieldset>
                        <Search defaultValue={ search } placeholder="js" onChange={ (e) => setSearch(e.target.value) }/>
                        <Submit><SlMagnifier /></Submit>
                    </Fieldset>
                </Filler>
                <Fieldset>
                    <Label>Categories
                        <Categories defaultValue={ category } onChange={ (e) => setCategory(e.target.value) }>
                            <option value="all">All</option>
                            <option value="art">Art</option>
                            <option value="biography">Biography</option>
                            <option value="computers">Computers</option>
                            <option value="history">History</option>
                            <option value="medical">Medical</option>
                            <option value="poetry">Poetry</option>
                        </Categories>
                    </Label>
                </Fieldset>
                <Fieldset>
                    <Label>Sorting by
                        <SortCase defaultValue={ sort } onChange={ (e) => setSort(e.target.value) }>
                            <option value="relevance">Relevance</option>
                            <option value="newest">Newest</option>
                        </SortCase>
                    </Label>
                </Fieldset>
            </Form>
    </>
}

export default SearchForm