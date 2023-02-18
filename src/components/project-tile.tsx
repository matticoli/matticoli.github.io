import { CardInner } from './card'
import Badge from './badge'
import Button from './button'

export default function ProjectTile(props: any) {
    console.log(props.tags);
    return <>
        <CardInner type="M" className="w-80 min-h-80 bg-[#2c2c2cCC] max-w-xxl sm:max-w-sm flex flex-row gap-1">
            <div className="flex-shrink flex flex-col max-w-xxl sm:max-w-sm w-80">
            <div className="w-80 p-2 mb-4 text-center bg-[#121212] text-sm font-bold">
            {props.roles}
            </div>
            <img    className="w-full max-w-80 rounded-md border-2" 
                    style={{borderColor: props.color}}  
                    title={props.title} 
                    alt={`${props.title} title card`} 
                    src={props.cover} />
            <div className="flex flex-wrap gap-0 justify-center mt-2">
                {props.tags.map((t: any) => {
                    return <Badge key={t[0]} bg={t[1]}>{t[0]}</Badge>
                })}
            </div>
            <p className="text-md p-2 text-left">{props.excerpt}</p>
            <Button className="ml-auto mr-0 text-sm w-40 h-10">{'More Info >>'}</Button>
        </div>
        </CardInner>
    </> 
}