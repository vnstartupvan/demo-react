import React from 'react'
import { useContext } from 'react'
import { CurrentTheme } from './TestUseContext';

function Content() {
    const ThemeContext = useContext(CurrentTheme);
    console.log(ThemeContext)
    return (
        <>
            <button onClick={ThemeContext.handleToggleTheme}>Toggle Theme</button>
            <div className={ThemeContext.theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero dolores quidem deserunt corporis. Temporibus mollitia magni sint repellendus possimus alias unde velit maxime inventore, eos quis distinctio ipsum quaerat aspernatur iusto ducimus sit odio! Assumenda voluptatum reprehenderit earum, aliquid aspernatur error ullam ad ipsa magni nostrum nulla sint pariatur possimus itaque quidem animi enim aperiam nisi veniam. Deserunt facilis, at illum molestias, ut perspiciatis magni quasi nobis corporis dignissimos delectus tenetur ratione unde. Molestiae magni porro cum, reiciendis dicta amet accusamus expedita assumenda minus enim. Harum laudantium vero, ipsum ex consequuntur quia ad amet tempore sunt ullam veniam saepe unde voluptatem soluta natus enim nam. At dolorem sed, officiis sapiente aperiam voluptates repudiandae, tempore voluptate dicta in aliquam? Cupiditate, voluptate consequatur exercitationem nemo cumque saepe quasi quia rem recusandae vero similique modi facilis impedit assumenda molestias fugit excepturi inventore! Ipsa sit vel autem rem alias suscipit, non eos sequi iure quam, temporibus aliquam voluptatibus perferendis cum ea? Aspernatur quaerat odit autem hic esse fugiat ipsa veritatis recusandae harum incidunt natus, adipisci, nostrum corrupti beatae id quibusdam aliquid repellat soluta dolorem! Porro saepe autem vero voluptatem iusto. Dolor similique eligendi modi reiciendis obcaecati nemo eos dolorum aliquid tenetur eaque? Alias!</div>
        </>
    )
}

export default Content