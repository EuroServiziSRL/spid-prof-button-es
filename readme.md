La libreria ha come prerequisito jQuery (versione 1.9+), ad esempio si può usare

```
<script src="https://code.jquery.com/jquery-1.9.1.min.js" integrity="sha256-wS9gmOZBqsqWxgIVgA8Y9WcQOa7PgSIX+rPA0VL2rbQ=" crossorigin="anonymous"></script>
```

Inserire DOPO l'importazione di jQuery il riferimento alla libreria javascript

```
<script type="text/javascript" src="/public/js/spid_prof_button.js"></script>
```

oppure quello compresso e minificato
 
``` 
<script type="text/javascript" src="/public/js/spid_prof_button.min.js"></script>
```

Inserire nella pagina il seguente frammento di codice come segnaposto per far comparire il bottone

```
<div id="spid-prof-button">
    <noscript>
        Il login tramite SPID richiede che JavaScript sia abilitato nel browser.
    </noscript>
</div>
```

Per attivare il bottone, inserire in uno script javascript:

```
SPIDPROF.init({url: "url_inizio_sso", eidas: true/false, path_img: 'path_img',tipo_accesso: 'PX' });
```

**Configurazioni**:

*url_inizio_sso*: url a cui rimanda il bottone, a cui viene accodato il parametro idp in GET http (Es: url/inizio/sso?idp=poste) (default: 'sso_init')

*eidas*: indica se mostrare anche il bottone per accesso con eIDAS (default: false)

*path_img*: path delle immagini usate dal bottone (default: '/public/img/spid')

*tipo_accesso*: tipo di accesso come specificato su Avviso Agid n. 18 (P, LP, PG, PF, PX)
