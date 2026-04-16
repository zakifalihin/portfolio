#!/bin/bash
# Script untuk copy PDF resume ke folder portfolio

# Paths
PDF_SOURCE="/Users/zakifalihin/Downloads/Resume - Zaki Falihin Ayyubi.pdf"
PDF_DEST="/Users/zakifalihin/Downloads/portofolio/files/Resume-Zaki-Falihin.pdf"

# Check if source file exists
if [ -f "$PDF_SOURCE" ]; then
    # Copy file
    cp "$PDF_SOURCE" "$PDF_DEST"
    echo "✅ PDF berhasil di-copy ke folder portfolio!"
    echo "📄 Lokasi: $PDF_DEST"
    echo "✨ Portfolio Anda sekarang bisa di-download oleh orang lain!"
else
    echo "❌ File PDF tidak ditemukan di: $PDF_SOURCE"
    echo "📝 Manual copy:"
    echo "   1. Buka Finder"
    echo "   2. Buka folder: /Users/zakifalihin/Downloads/"
    echo "   3. Copy file 'Resume - Zaki Falihin Ayyubi.pdf'"
    echo "   4. Buka folder: portofolio/files/"
    echo "   5. Paste dan rename menjadi 'Resume-Zaki-Falihin.pdf'"
fi
