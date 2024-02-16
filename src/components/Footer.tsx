export function Footer() {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  });

  return (
    <footer className="bg-secondary py-6 border-t">
      <div className="flex justify-center items-center">
        <div className="text-sm text-center max-w-screen-sm space-y-4">
          <p>Mercadinho</p>
          <p>
            &copy; {dateFormatter.format(new Date())} - Desenvolvido por Shindi
            Toyama :)
          </p>
        </div>
      </div>
    </footer>
  );
}
