document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm') as HTMLFormElement;

    form.addEventListener('submit', async (e: Event) => {
        e.preventDefault();

        const formData = new FormData(form);

        const data = {
            name: formData.get('name') as string,
            price: formData.get('price') as string,
            imageUrl: formData.get('imageUrl') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string
        };

        try {
            const response = await fetch('http://localhost:3000/api/products/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Produto cadastrado com sucesso!');
                form.reset();
            } else {
                const error = await response.json();
                alert('Erro ao cadastrar: ' + error.message);
            }
        } catch (err: any) {
            alert('Erro na requisição: ' + err.message);
        }
    });
});
