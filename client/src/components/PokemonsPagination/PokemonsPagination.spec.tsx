import React                  from "react"
import { render, screen }     from "@testing-library/react"
import { PokemonsPagination } from "."

const renderPokemonsPagination = () => render(
  <PokemonsPagination
    page={2}
    pageSize={20} 
    totalRecords={200}
    onChange={jest.fn()}
  />
)

describe("Pokemons pagination", () => {
  it("should render pagination component", async () => {
    renderPokemonsPagination()

    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Go to page 1" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Go to page 3" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Go to page 4" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Go to page 5" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Go to page 10" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeInTheDocument()
  })
})
