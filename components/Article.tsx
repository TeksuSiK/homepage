interface Props {
  children: React.ReactNode;
}

const Article = ({children}: Props) => {
	return (
    <main className="pt-10 max-w-2xl p-5 grid grid-cols-1 gap-8">
      {children}
    </main>
  )
}

export default Article