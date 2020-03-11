class Movie
{
    constructor(name, genre, year)
    {
        this.Name = name;
        this.Genre = genre;
        this.Year = year;
    }

    get name()
    {
        return this.Name;
    }    

    set name (name)
    {
        if (typeof name === 'string')
        {
            this.Name = name;
        }
        else 
        {
            this.Name = name.toString();
        }
        return this.Name;
    }
}