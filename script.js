// Calculadora de Economia de Água - Agrinho 2026
function calcularEconomia() {
    const area = parseFloat(document.getElementById('area').value);
    const eficiencia = parseFloat(document.getElementById('irrigacao').value);
    
    // Consumo médio aproximado por hectare ao ano (em m³)
    const consumoBase = 5000; // 5000m³ por hectare/ano com irrigação ineficiente
    
    const consumoAtual = consumoBase * area * eficiencia;
    const consumoIdeal = consumoBase * area * 0.3; // gotejamento
    const economia = consumoAtual - consumoIdeal;
    
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Com irrigação atual você gasta: <strong>${consumoAtual.toFixed(0)} m³/ano</strong><br>
        Com gotejamento você gastaria: <strong>${consumoIdeal.toFixed(0)} m³/ano</strong><br><br>
        <span style="color: #2e7d32;">Economia possível: <strong>${economia.toFixed(0)} m³ de água por ano!</strong></span><br>
        Isso equivale a mais de <strong>${(economia / 200).toFixed(0)} piscinas olímpicas</strong> de água economizadas!
    `;
}
