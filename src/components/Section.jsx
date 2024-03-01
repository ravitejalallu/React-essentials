export default function Section(props){
    return  <section {...props}>
    <h2>{props.text}</h2>
    {props.children}
    </section>
}