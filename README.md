#[Demo](http://rafaelcastrocouto.github.com/smartchords "Demo")

Smartchords
=======

This is a music tool I created to my smartphone so I could play some chords anywhere!

Its very simple and this is how it works:

1. Create a html file and paste your song inside a pre tag (that's easy!)

  &lt;html&gt; &lt;body&gt; &lt;pre&gt;
    
    paste your song here... 
    
  &lt;/pre&gt; &lt;/body&gt; &lt;/html&gt;
  
2. Put all your chords inside b tags line by line (that's boring...)

  &lt;html&gt; &lt;body&gt; &lt;pre&gt;
    &lt;b&gt;paste your chords here... &lt;/b&gt;
    
    paste your lyrics here...
    
  &lt;/pre&gt; &lt;/body&gt; &lt;/html&gt;
  
3. Link the smartchords.js file before the end of your file (that's it!)

  &lt;html&gt; &lt;body&gt; &lt;pre&gt;
    &lt;b&gt;paste your chords here... &lt;/b&gt;
    paste your lyrics here...
    
    &lt;script src="smartchords.js"&gt;&lt;/script&gt;
    
  &lt;/pre&gt; &lt;/body&gt; &lt;/html&gt;
  
If you have persistent connection you can use my Github link:

    &lt;script src="http://rafaelcastrocouto.github.com/smartchords/smartchords.js"&gt;&lt;/script&gt;

Example:

  &lt;html&gt;&lt;body&gt;&lt;pre&gt;
    Tom:&lt;b&gt;D&lt;/b&gt;&lt;br&gt;
    &lt;b&gt;D6/9                  E7/9&lt;/b&gt;
    O pato vinha cantando alegremente, quém, quém
    &lt;b&gt;                     Em7/9     A6/7&lt;/b&gt;
    Quando um marreco sorridente pediu
    &lt;b&gt;                       D6/9&lt;/b&gt;
    Pra entrar também no samba, no samba, no samba
    &lt;b&gt;  D6/9                         E7(9)&lt;/b&gt;
    O ganso gostou da dupla e fez também quém, quém
    &lt;b&gt;                         Em7/9       A6/7&lt;/b&gt;
    Olhou pro cisne e disse assim "vem, vem"
    &lt;b&gt;                      D6/9 G6/7 D6/9        D7(9)&lt;/b&gt;
    Que o quarteto ficará bem, muito bom, muito bem
    &lt;b&gt;             G7M&lt;/b&gt;
    Na beira da lagoa foram ensaiar
    &lt;b&gt;       E7(9)         A6/7     D6/9 D7(9)&lt;/b&gt;
    Para começar o tico-tico no fubá
    &lt;b&gt;          G7M      Gm6        D7+/F# D7(9)&lt;/b&gt;
    A voz do pato era mesmo um desacato
    &lt;b&gt;          G7M       Gm6       D7+/F# D7(9) G7M&lt;/b&gt;
    Jogo de cena com o ganso era mato
    &lt;b&gt;         Gm6      D7+/F#                E7(9)&lt;/b&gt;
    Mas eu gostei do final quando caíram n'água
    &lt;b&gt; A6/7          D6/9&lt;/b&gt;
    E ensaiando o vocal
    &lt;b&gt;(D6/9 E7(9) Em7/9 A6/7)&lt;/b&gt;
    quém, quém, quém, quém
    quém, quém, quém, quém
    
    &lt;script src="smartchords.js"&gt;&lt;/script&gt;
    
  &lt;/pre&gt;&lt;/body&gt;&lt;/html&gt;
  
The song tone will aways be the first chord.