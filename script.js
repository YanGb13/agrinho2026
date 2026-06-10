function calcularEconomia() {
    const area = parseFloat(document.getElementById('area').value) || 50;
    const eficiencia = parseFloat(document.getElementById('irrigacao').value);
    
    const consumoBase = 5500; // m³ por hectare/ano
    const consumoAtual = consumoBase * area * eficiencia;
    const consumoIdeal = consumoBase * area * 0.35;
    const economia = consumoAtual - consumoIdeal;
    
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <strong>🔬 Simulação para ${area} hectares:</strong><br><br>
        Consumo atual: <strong>${consumoAtual.toLocaleString('pt-BR')} m³/ano</strong><br>
        Consumo com tecnologia avançada: <strong>${consumoIdeal.toLocaleString('pt-BR')} m³/ano</strong><br><br>
        <span style="color:#00ff9d; font-size:1.4rem;">
            💧 Economia anual: <strong>${economia.toLocaleString('pt-BR')} m³</strong>
        </span><br>
        Equivalente a <strong>${Math.round(economia / 2500)} piscinas olímpicas</strong> de água economizadas!
    `;
}
